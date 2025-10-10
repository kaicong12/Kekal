"use client";
import { Row, Col, Input, Typography } from "antd";

const { Title } = Typography;

export default function CustomerDetailsForm({ receiptData, updateCustomer }) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <Title level={4}>Customer Details</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
          <label>
            Customer Name <span style={{ color: "red" }}>*</span>
          </label>
          <Input
            placeholder="Enter customer name"
            value={receiptData.customer.name}
            onChange={(e) => updateCustomer("name", e.target.value)}
            style={{ marginTop: "8px" }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <label>Email</label>
          <Input
            type="email"
            placeholder="customer@email.com"
            value={receiptData.customer.email}
            onChange={(e) => updateCustomer("email", e.target.value)}
            style={{ marginTop: "8px" }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <label>Address</label>
          <Input
            placeholder="Street address"
            value={receiptData.customer.address}
            onChange={(e) => updateCustomer("address", e.target.value)}
            style={{ marginTop: "8px" }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <label>City & Postal Code</label>
          <Input
            placeholder="City, State, Postal Code"
            value={receiptData.customer.cityPostal}
            onChange={(e) => updateCustomer("cityPostal", e.target.value)}
            style={{ marginTop: "8px" }}
          />
        </Col>
        <Col xs={24} sm={12}>
          <label>Phone Number</label>
          <Input
            placeholder="+60 12-345 6789"
            value={receiptData.customer.phone}
            onChange={(e) => updateCustomer("phone", e.target.value)}
            style={{ marginTop: "8px" }}
          />
        </Col>
      </Row>
    </div>
  );
}
