import { storage } from "@/utils/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export async function uploadMotorcycleImage(file, motorcycleId) {
  const timestamp = Date.now();
  const ext = file.name.split(".").pop();
  const path = `motorcycleImages/${motorcycleId}/${timestamp}.${ext}`;
  const storageRef = ref(storage, path);

  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function deleteMotorcycleImage(imageUrl) {
  try {
    const storageRef = ref(storage, imageUrl);
    await deleteObject(storageRef);
  } catch {
    // Silently skip non-Firebase URLs or already-deleted images
  }
}
