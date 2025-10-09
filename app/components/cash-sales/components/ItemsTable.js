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
} from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

export default function ItemsTable({
  receiptData,
  updateItem,
  addItem,
  removeItem,
  calculateTotal,
}) {
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

      <Table
        dataSource={receiptData.items.map((item, index) => ({
          ...item,
          key: index,
        }))}
        columns={columns}
        pagination={false}
      />

      {/* Total */}
      <Row justify="end" style={{ marginTop: "24px" }}>
        <Col span={8}>
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
