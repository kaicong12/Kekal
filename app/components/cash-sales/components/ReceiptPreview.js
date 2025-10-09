"use client";
import React from "react";
import {
  Modal,
  Card,
  Row,
  Col,
  Button,
  Table,
  Typography,
  Divider,
  Space,
  Tag,
  Descriptions,
} from "antd";
import {
  ArrowLeftOutlined,
  DownloadOutlined,
  PrinterOutlined,
  MailOutlined,
  StarFilled,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const ReceiptPreview = React.memo(
  ({ open, onClose, receiptData, calculateTotal }) => {
    if (!receiptData) return null;

    return (
      <Modal
        open={open}
        onCancel={onClose}
        width={900}
        footer={null}
        styles={{ body: { padding: 0 } }}
      >
        <div style={{ padding: "40px" }}>
          {/* Header */}
          <div style={{ marginBottom: "24px" }}>
            <Button
              type="link"
              icon={<ArrowLeftOutlined />}
              onClick={onClose}
              style={{ padding: 0, marginBottom: "16px" }}
            >
              Back to Edit
            </Button>
          </div>

          {/* Company Header */}
          <Card
            style={{
              borderTop: "8px solid #faad14",
              marginBottom: "24px",
            }}
          >
            <Row justify="space-between" align="middle">
              <Col>
                <Space align="center">
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      background: "#faad14",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <StarFilled
                      style={{ fontSize: "24px", color: "#1f2937" }}
                    />
                  </div>
                  <div>
                    <Title level={4} style={{ margin: 0 }}>
                      永恒摩托贸易公司
                    </Title>
                    <Text type="secondary">Perniagaan Motor Kekal</Text>
                  </div>
                </Space>
              </Col>
              <Col>
                <div style={{ textAlign: "right" }}>
                  <Title level={3} style={{ margin: 0 }}>
                    RECEIPT
                  </Title>
                  <div>
                    <Text strong>Receipt #:</Text> {receiptData.receiptNumber}
                  </div>
                  <div>
                    <Text strong>Date:</Text>{" "}
                    {receiptData.purchaseDate.format("DD MMM YYYY")}
                  </div>
                </div>
              </Col>
            </Row>
          </Card>

          {/* From and Bill To */}
          <Row gutter={24} style={{ marginBottom: "24px" }}>
            <Col span={12}>
              <Card
                title={
                  <Tag color="gold" style={{ fontWeight: "bold" }}>
                    FROM
                  </Tag>
                }
                size="small"
              >
                <div>
                  <Text strong>Perniagaan Motor Kekal</Text>
                </div>
                <div>永恒摩托贸易公司</div>
                <div>No. 123, Jalan Dato Sulaiman</div>
                <div>Taman Abad, 80250</div>
                <div>Johor Bahru, Johor</div>
                <div>Tel: +60 7-123 4567</div>
                <div>Email: info@motorkekal.com</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card
                title={
                  <Tag color="gold" style={{ fontWeight: "bold" }}>
                    BILL TO
                  </Tag>
                }
                size="small"
              >
                <div>
                  <Text strong>{receiptData.customer.name}</Text>
                </div>
                {receiptData.customer.address && (
                  <div>{receiptData.customer.address}</div>
                )}
                {receiptData.customer.cityPostal && (
                  <div>{receiptData.customer.cityPostal}</div>
                )}
                {receiptData.customer.email && (
                  <div>{receiptData.customer.email}</div>
                )}
                {receiptData.customer.phone && (
                  <div>{receiptData.customer.phone}</div>
                )}
              </Card>
            </Col>
          </Row>

          {/* Items Table */}
          <Card style={{ marginBottom: "24px" }}>
            <Table
              dataSource={receiptData.items.map((item, index) => ({
                ...item,
                key: index,
                index: index + 1,
              }))}
              columns={[
                { title: "#", dataIndex: "index", width: "8%" },
                { title: "Description", dataIndex: "description" },
                {
                  title: "Qty",
                  dataIndex: "quantity",
                  align: "center",
                  width: "12%",
                },
                {
                  title: "Unit Price",
                  dataIndex: "unitPrice",
                  align: "right",
                  width: "15%",
                  render: (value) => `RM ${value.toFixed(2)}`,
                },
                {
                  title: "Amount",
                  dataIndex: "amount",
                  align: "right",
                  width: "15%",
                  render: (value) => `RM ${value.toFixed(2)}`,
                },
              ]}
              pagination={false}
              size="middle"
            />

            <Divider />

            <Row justify="end">
              <Col span={8}>
                <Descriptions column={1} size="small">
                  <Descriptions.Item
                    label={
                      <Text
                        strong
                        style={{ fontSize: "16px", color: "#faad14" }}
                      >
                        Total
                      </Text>
                    }
                  >
                    <Text strong style={{ fontSize: "18px", color: "#faad14" }}>
                      RM {calculateTotal().toFixed(2)}
                    </Text>
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Card>

          {/* Payment Details */}
          <Row gutter={24} style={{ marginBottom: "24px" }}>
            <Col span={12}>
              <Card title="Payment Details" size="small">
                <div>
                  <Text strong>Payment Method:</Text>
                </div>
                <div>{receiptData.paymentMethod}</div>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Payment Status" size="small">
                <Tag color="success">Paid in Full</Tag>
              </Card>
            </Col>
          </Row>

          {/* Notes */}
          {receiptData.additionalNotes && (
            <Card title="Notes" size="small" style={{ marginBottom: "24px" }}>
              <Paragraph>{receiptData.additionalNotes}</Paragraph>
            </Card>
          )}

          {/* Action Buttons */}
          <Divider />
          <Space style={{ width: "100%", justifyContent: "center" }}>
            <Button type="primary" icon={<DownloadOutlined />}>
              Download PDF
            </Button>
            <Button icon={<PrinterOutlined />}>Print</Button>
            <Button icon={<MailOutlined />}>Send Email</Button>
          </Space>

          {/* Footer */}
          <Divider />
          <div style={{ textAlign: "center" }}>
            <Text type="secondary">
              Perniagaan Motor Kekal | Your One Stop Motorcycle Dealer in Johor
              Bahru
            </Text>
            <br />
            <Text type="secondary">
              Ride with Confidence, Ride with Us. Serving Johor Bahru&apos;s
              Riders for Over 30 Years.
            </Text>
          </div>
        </div>
      </Modal>
    );
  }
);

ReceiptPreview.displayName = "ReceiptPreview";

export default ReceiptPreview;
