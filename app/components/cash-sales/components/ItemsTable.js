"use client";
import {
  Row,
  Col,
  Table,
  Button,
  Input,
  InputNumber,
  Typography,
  Descriptions,
  Card,
} from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Title, Text } = Typography;

export default function ItemsTable({
  receiptData,
  updateItem,
  addItem,
  removeItem,
  calculateTotal,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const columns = [
    {
      title: "Description *",
      dataIndex: "description",
      width: "35%",
      render: (text, record, index) => (
        <Input
          placeholder="Item description"
          value={text}
          onChange={(e) => updateItem(index, "description", e.target.value)}
        />
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: "15%",
      render: (value, record, index) => (
        <InputNumber
          min={1}
          value={value}
          onChange={(val) => updateItem(index, "quantity", val || 0)}
          style={{ width: "100%" }}
        />
      ),
    },
    {
      title: "Unit Price (RM)",
      dataIndex: "unitPrice",
      width: "20%",
      render: (value, record, index) => (
        <InputNumber
          min={0}
          precision={2}
          value={value}
          onChange={(val) => updateItem(index, "unitPrice", val || 0)}
          style={{ width: "100%" }}
        />
      ),
    },
    {
      title: "Amount",
      dataIndex: "amount",
      width: "20%",
      render: (value) => <Input value={`RM ${value.toFixed(2)}`} disabled />,
    },
    {
      title: "Action",
      width: "10%",
      render: (_, record, index) =>
        receiptData.items.length > 1 && (
          <Button
            type="text"
            danger
            icon={<DeleteOutlined />}
            onClick={() => removeItem(index)}
          />
        ),
    },
  ];

  const renderMobileCards = () => {
    return receiptData.items.map((item, index) => (
      <Card
        key={index}
        style={{ marginBottom: "16px" }}
        bodyStyle={{ padding: "16px" }}
      >
        <Row
          justify="space-between"
          align="top"
          style={{ marginBottom: "16px" }}
        >
          <Col>
            <Text strong>Description *</Text>
          </Col>
          <Col>
            {receiptData.items.length > 1 && (
              <Button
                type="text"
                danger
                icon={<DeleteOutlined />}
                onClick={() => removeItem(index)}
                size="small"
              />
            )}
          </Col>
        </Row>

        <Input
          placeholder="Item description"
          value={item.description}
          onChange={(e) => updateItem(index, "description", e.target.value)}
          style={{ marginBottom: "16px" }}
        />

        <Row gutter={[8, 16]}>
          <Col xs={12}>
            <Text strong>Quantity</Text>
            <InputNumber
              min={1}
              value={item.quantity}
              onChange={(val) => updateItem(index, "quantity", val || 0)}
              style={{ width: "100%", marginTop: "8px" }}
            />
          </Col>
          <Col xs={12}>
            <Text strong>Unit Price (RM)</Text>
            <InputNumber
              min={0}
              precision={2}
              value={item.unitPrice}
              onChange={(val) => updateItem(index, "unitPrice", val || 0)}
              style={{ width: "100%", marginTop: "8px" }}
            />
          </Col>
        </Row>

        <div style={{ marginTop: "16px" }}>
          <Text strong>Amount</Text>
          <Input
            value={`RM ${item.amount.toFixed(2)}`}
            disabled
            style={{ marginTop: "8px" }}
          />
        </div>
      </Card>
    ));
  };

  const renderDesktopTable = () => {
    return (
      <Table
        dataSource={receiptData.items.map((item, index) => ({
          ...item,
          key: index,
        }))}
        columns={columns}
        pagination={false}
        scroll={{ x: 800 }}
        size="small"
      />
    );
  };

  return (
    <div style={{ marginBottom: "32px" }}>
      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: "16px" }}
      >
        <Col>
          <Title level={4} style={{ margin: 0 }}>
            Purchased Items
          </Title>
        </Col>
        <Col>
          <Button type="primary" icon={<PlusOutlined />} onClick={addItem}>
            Add Item
          </Button>
        </Col>
      </Row>

      {isMobile ? renderMobileCards() : renderDesktopTable()}

      {/* Total */}
      <Row justify="end" style={{ marginTop: "24px" }}>
        <Col xs={24} sm={12} md={8}>
          <Descriptions column={1} size="small" bordered>
            <Descriptions.Item
              label={
                <Text strong style={{ color: "#faad14", fontSize: "16px" }}>
                  Total
                </Text>
              }
            >
              <Text strong style={{ color: "#faad14", fontSize: "18px" }}>
                RM {calculateTotal().toFixed(2)}
              </Text>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </div>
  );
}
