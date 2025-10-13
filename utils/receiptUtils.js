import { db, storage } from "@/utils/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
  serverTimestamp,
  where,
  limit,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { message } from "antd";

/**
 * Save receipt to Firebase with PDF upload
 * @param {Object} receiptData - The receipt data to save
 * @param {Blob} pdfBlob - The PDF blob to upload
 * @returns {Object} - Success status and document reference
 */
export const saveReceiptToFirebase = async (receiptData, pdfBlob) => {
  try {
    // Upload PDF to Firebase Storage
    const storageRef = ref(
      storage,
      `generatedReceipts/${receiptData.receiptNumber}.pdf`
    );
    const uploadResult = await uploadBytes(storageRef, pdfBlob);
    const pdfUrl = await getDownloadURL(uploadResult.ref);

    // Calculate total from items
    const total = receiptData.items.reduce(
      (sum, item) => sum + (item.amount || 0),
      0
    );

    // Prepare receipt data for Firestore
    const receiptDataToSave = {
      receiptNumber: receiptData.receiptNumber,
      purchaseDate: receiptData.purchaseDate.toDate(),
      customer: receiptData.customer,
      items: receiptData.items,
      paymentMethod: receiptData.paymentMethod,
      additionalNotes: receiptData.additionalNotes,
      total: total,
      pdfUrl: pdfUrl,
      createdAt: serverTimestamp(),
    };

    // Save to Firestore
    const docRef = await addDoc(
      collection(db, "generatedReceipts"),
      receiptDataToSave
    );

    return { success: true, docRef, pdfUrl };
  } catch (error) {
    console.error("Error saving receipt:", error);
    throw new Error("Failed to save receipt to Firebase");
  }
};

/**
 * Load all receipts from Firebase
 * @returns {Array} - Array of receipt objects
 */
export const loadReceiptsFromFirebase = async () => {
  try {
    const receiptsCollection = collection(db, "generatedReceipts");
    const q = query(receiptsCollection, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const receiptsList = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
      };
    });

    return receiptsList;
  } catch (error) {
    console.error("Error loading receipts:", error);
    throw new Error("Failed to load receipts from Firebase");
  }
};

/**
 * Delete a receipt from Firebase
 * @param {string} receiptId - The ID of the receipt to delete
 * @returns {boolean} - Success status
 */
export const deleteReceiptFromFirebase = async (receiptId) => {
  try {
    await deleteDoc(doc(db, "generatedReceipts", receiptId));
    return true;
  } catch (error) {
    console.error("Error deleting receipt:", error);
    throw new Error("Failed to delete receipt from Firebase");
  }
};

/**
 * Generate receipt number
 * @returns {string} - Generated receipt number
 */
export const generateReceiptNumber = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const randomNum = Math.floor(Math.random() * 9000) + 1000;
  return `RCP-${year}${month}${day}-${randomNum}`;
};

/**
 * Generate next receipt number based on latest receipt in Firebase
 * @returns {string} - Next receipt number
 */
export const generateNextReceiptNumber = async () => {
  try {
    const receiptsCollection = collection(db, "generatedReceipts");
    const q = query(receiptsCollection, orderBy("createdAt", "desc"), limit(1));
    const snapshot = await getDocs(q);

    if (!snapshot.empty) {
      const latestReceipt = snapshot.docs[0].data();
      const latestReceiptNumber = latestReceipt.receiptNumber;

      // Extract the suffix from the latest receipt number (e.g., "RCP-20251011-6114" -> "6114")
      const parts = latestReceiptNumber.split("-");
      if (parts.length === 3) {
        const suffix = parseInt(parts[2]);
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const newSuffix = String(suffix + 1).padStart(4, "0");
        return `RCP-${year}${month}${day}-${newSuffix}`;
      }
    }

    // If no receipts found or format is unexpected, generate a new one
    return generateReceiptNumber();
  } catch (error) {
    console.error("Error generating next receipt number:", error);
    // Fallback to random generation
    return generateReceiptNumber();
  }
};

/**
 * Check if receipt number already exists in Firebase
 * @param {string} receiptNumber - Receipt number to check
 * @returns {boolean} - True if exists, false otherwise
 */
export const checkReceiptNumberExists = async (receiptNumber) => {
  try {
    const receiptsCollection = collection(db, "generatedReceipts");
    const q = query(
      receiptsCollection,
      where("receiptNumber", "==", receiptNumber)
    );
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  } catch (error) {
    console.error("Error checking receipt number:", error);
    return false;
  }
};

/**
 * Calculate total from receipt items
 * @param {Array} items - Array of receipt items
 * @returns {number} - Total amount
 */
export const calculateReceiptTotal = (items) => {
  return items.reduce((sum, item) => sum + (item.amount || 0), 0);
};

/**
 * Validate receipt data before preview generation
 * @param {Object} receiptData - Receipt data to validate
 * @returns {Object} - Validation result with success status and message
 */
export const validateReceiptForPreview = (receiptData) => {
  if (!receiptData.customer.name) {
    return {
      success: false,
      message: "Please enter customer name before generating preview",
    };
  }

  const hasValidItems = receiptData.items.some(
    (item) => item.description.trim() && item.quantity > 0
  );

  if (!hasValidItems) {
    return {
      success: false,
      message:
        "Please add at least one valid item with description and quantity",
    };
  }

  return { success: true };
};
