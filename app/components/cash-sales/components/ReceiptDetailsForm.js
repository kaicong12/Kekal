"use client";
import {
  Row,
  Col,
  Checkbox,
  Input,
  DatePicker,
  Typography,
  message,
} from "antd";
import { useState, useEffect } from "react";
import { generateNextReceiptNumber } from "@/utils/receiptUtils";

const { Title } = Typography;

export default function ReceiptDetailsForm({ receiptData, setReceiptData }) {
  const [isCustomId, setIsCustomId] = useState(false);
  const [loading, setLoading] = useState(false);

  // Generate next receipt number when component mounts or checkbox is unchecked
  useEffect(() => {
    if (!isCustomId) {
      generateAndSetNextReceiptNumber();
    }
  }, [isCustomId]);

  const generateAndSetNextReceiptNumber = async () => {
    setLoading(true);
    try {
      const nextReceiptNumber = await generateNextReceiptNumber();
      setReceiptData((prev) => ({
        ...prev,
        receiptNumber: nextReceiptNumber,
      }));
    } catch (error) {
      console.error("Error generating receipt number:", error);
      message.error("Failed to generate receipt number");
    } finally {
      setLoading(false);
    }
  };

  const handleCustomIdChange = (e) => {
    const checked = e.target.checked;
    setIsCustomId(checked);

    if (!checked) {
      // If unchecking, regenerate the next receipt number
      generateAndSetNextReceiptNumber();
    }
  };

  const handleReceiptNumberChange = (e) => {
    const value = e.target.value;
    setReceiptData((prev) => ({
      ...prev,
      receiptNumber: value,
    }));
  };

  return (
    <div style={{ marginBottom: "32px" }}>
      <Title level={4}>Receipt Details</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <label>Receipt Number</label>
          <Input
            value={receiptData.receiptNumber}
            onChange={handleReceiptNumberChange}
            disabled={!isCustomId}
            loading={loading && !isCustomId}
            placeholder={
              isCustomId ? "Enter custom receipt number" : "Auto-generated"
            }
            style={{ marginTop: "8px", marginBottom: "8px" }}
          />
          <Checkbox checked={isCustomId} onChange={handleCustomIdChange}>
            Enable Custom Receipt Number
          </Checkbox>
        </Col>
        <Col xs={24} sm={12}>
          <label>Purchase Date</label>
          <DatePicker
            value={receiptData.purchaseDate}
            onChange={(date) =>
              setReceiptData((prev) => ({
                ...prev,
                purchaseDate: date,
              }))
            }
            style={{ width: "100%", marginTop: "8px" }}
          />
        </Col>
      </Row>
    </div>
  );
}
