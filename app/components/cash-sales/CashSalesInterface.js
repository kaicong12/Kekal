"use client";
import { useState, useCallback } from "react";
import { message } from "antd";
import { Card, Row, Col, Button, Divider } from "antd";
import { FileTextOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";

// Extend dayjs with required plugins
dayjs.extend(weekday);
dayjs.extend(localeData);

// Import components
import ReceiptHeader from "./components/ReceiptHeader";
import ReceiptDetailsForm from "./components/ReceiptDetailsForm";
import CustomerDetailsForm from "./components/CustomerDetailsForm";
import ItemsTable from "./components/ItemsTable";
import PaymentNotesForm from "./components/PaymentNotesForm";
import ReceiptPreview from "./components/ReceiptPreview";

// Import utilities
import {
  generateReceiptNumber,
  validateReceiptForPreview,
} from "@/utils/receiptUtils";

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
    const validation = validateReceiptForPreview(receiptData);

    if (!validation.success) {
      message.error(validation.message);
      return;
    }

    setShowPreview(true);
  }, [receiptData]);

  const handleClosePreview = useCallback(() => {
    setShowPreview(false);
  }, []);

  return (
    <div style={{ padding: "24px" }}>
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
  );
}
