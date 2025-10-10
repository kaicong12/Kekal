"use client";
import { Row, Col, Input, DatePicker, Typography } from "antd";

const { Title } = Typography;

export default function ReceiptDetailsForm({ receiptData, setReceiptData }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <Title level={4}>Receipt Details</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <label>Receipt Number</label>
          <Input
            value={receiptData.receiptNumber}
            disabled
            style={{ marginTop: "8px" }}
          />
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
