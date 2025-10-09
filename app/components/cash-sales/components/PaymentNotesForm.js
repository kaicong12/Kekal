"use client";
import { Row, Col, Select, Input, Typography } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

export default function PaymentNotesForm({ receiptData, setReceiptData }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <Title level={4}>Payment & Notes</Title>
      <Row gutter={16}>
        <Col span={12}>
          <label>Payment Method</label>
          <Select
            value={receiptData.paymentMethod}
            onChange={(value) =>
              setReceiptData((prev) => ({
                ...prev,
                paymentMethod: value,
              }))
            }
            style={{ width: "100%", marginTop: "8px" }}
          >
            <Select.Option value="Cash">Cash</Select.Option>
            <Select.Option value="Credit Card">Credit Card</Select.Option>
            <Select.Option value="Debit Card">Debit Card</Select.Option>
            <Select.Option value="Bank Transfer">Bank Transfer</Select.Option>
            <Select.Option value="E-Wallet">E-Wallet</Select.Option>
          </Select>
        </Col>
        <Col span={24}>
          <label>Additional Notes</label>
          <TextArea
            rows={3}
            placeholder="Thank you for your purchase!"
            value={receiptData.additionalNotes}
            onChange={(e) =>
              setReceiptData((prev) => ({
                ...prev,
                additionalNotes: e.target.value,
              }))
            }
            style={{ marginTop: "8px" }}
          />
        </Col>
      </Row>
    </div>
  );
}
