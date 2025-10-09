"use client";
import { useState, useCallback } from "react";
import { message } from "antd";
import { Card, Row, Col, Button, Divider } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import dayjs from "dayjs";

// Import components
import ReceiptHeader from "./components/ReceiptHeader";
import ReceiptDetailsForm from "./components/ReceiptDetailsForm";
import CustomerDetailsForm from "./components/CustomerDetailsForm";
import ItemsTable from "./components/ItemsTable";
import PaymentNotesForm from "./components/PaymentNotesForm";
import ReceiptPreview from "./components/ReceiptPreview";

export default function CashSalesInterface() {
  const [receiptData, setReceiptData] = useState({
    receiptNumber: generateReceiptNumber(),
    purchaseDate: dayjs(),
    customer: {
      name: "",
      email: "",
      address: "",
      cityPostal: "",
      phone: "",
    },
    items: [
      {
        id: 1,
        description: "",
        quantity: 1,
        unitPrice: 0,
        amount: 0,
      },
    ],
    paymentMethod: "Cash",
    additionalNotes: "Thank you for your purchase!",
  });

  const [showPreview, setShowPreview] = useState(false);

  function generateReceiptNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    return `RCP-${year}${month}${day}-${randomNum}`;
  }

  const updateCustomer = useCallback((field, value) => {
    setReceiptData((prev) => ({
      ...prev,
      customer: {
        ...prev.customer,
        [field]: value,
      },
    }));
  }, []);

  const updateItem = useCallback(
    (index, field, value) => {
      const newItems = [...receiptData.items];
      newItems[index] = {
        ...newItems[index],
        [field]: value,
      };

      if (field === "quantity" || field === "unitPrice") {
        newItems[index].amount =
          newItems[index].quantity * newItems[index].unitPrice;
      }

      setReceiptData((prev) => ({
        ...prev,
        items: newItems,
      }));
    },
    [receiptData.items]
  );

  const addItem = useCallback(() => {
    const newItem = {
      id: receiptData.items.length + 1,
      description: "",
      quantity: 1,
      unitPrice: 0,
      amount: 0,
    };
    setReceiptData((prev) => ({
      ...prev,
      items: [...prev.items, newItem],
    }));
  }, [receiptData.items.length]);

  const removeItem = useCallback(
    (index) => {
      if (receiptData.items.length > 1) {
        const newItems = receiptData.items.filter((_, i) => i !== index);
        setReceiptData((prev) => ({
          ...prev,
          items: newItems,
        }));
      }
    },
    [receiptData.items.length]
  );

  const calculateTotal = useCallback(() => {
    return receiptData.items.reduce((sum, item) => sum + item.amount, 0);
  }, [receiptData.items]);

  const generatePreview = useCallback(() => {
    if (!receiptData.customer.name) {
      message.error("Please enter customer name before generating preview");
      return;
    }

    const hasValidItems = receiptData.items.some(
      (item) =>
        item.description.trim() && item.quantity > 0 && item.unitPrice > 0
    );

    if (!hasValidItems) {
      message.error(
        "Please add at least one valid item with description, quantity, and price"
      );
      return;
    }

    setShowPreview(true);
  }, [receiptData.customer.name, receiptData.items]);

  const handleClosePreview = useCallback(() => {
    setShowPreview(false);
  }, []);

  return (
    <div>
      <ReceiptHeader />
      {/* Header */}

      <div
        className="container"
        style={{ minHeight: "100vh", background: "#f5f5f5", padding: "24px" }}
      >
        <Row gutter={24}>
          <Col span={24}>
            <Card>
              {/* Receipt Details */}
              <ReceiptDetailsForm
                receiptData={receiptData}
                setReceiptData={setReceiptData}
              />

              <Divider />

              {/* Customer Details */}
              <CustomerDetailsForm
                receiptData={receiptData}
                updateCustomer={updateCustomer}
              />

              <Divider />

              {/* Purchased Items */}
              <ItemsTable
                receiptData={receiptData}
                updateItem={updateItem}
                addItem={addItem}
                removeItem={removeItem}
                calculateTotal={calculateTotal}
              />

              <Divider />

              {/* Payment & Notes */}
              <PaymentNotesForm
                receiptData={receiptData}
                setReceiptData={setReceiptData}
              />

              {/* Generate Button */}
              <Row justify="end">
                <Col>
                  <Button
                    type="primary"
                    size="large"
                    icon={<FileTextOutlined />}
                    onClick={generatePreview}
                  >
                    Generate Receipt Preview
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <ReceiptPreview
          open={showPreview}
          onClose={handleClosePreview}
          receiptData={receiptData}
          calculateTotal={calculateTotal}
        />
      </div>
    </div>
  );
}
