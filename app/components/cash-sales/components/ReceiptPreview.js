"use client";
import React, { useRef, useState } from "react";
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
  message,
} from "antd";
import {
  ArrowLeftOutlined,
  DownloadOutlined,
  PrinterOutlined,
  MailOutlined,
  StarFilled,
  SaveOutlined,
} from "@ant-design/icons";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveReceiptToFirebase } from "@/utils/receiptUtils";

const { Title, Text, Paragraph } = Typography;

const ReceiptPreview = React.memo(
  ({ open, onClose, receiptData, calculateTotal, isManagement = false }) => {
    const receiptRef = useRef(null);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [isSendingEmail, setIsSendingEmail] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [showSaveConfirmation, setShowSaveConfirmation] = useState(false);

    if (!receiptData) return null;

    // Download PDF function
    const handleDownloadPdf = async () => {
      if (!receiptRef.current) return;

      try {
        setIsGeneratingPdf(true);
        message.loading("Generating PDF...", 0);

        // Hide the action buttons temporarily
        const actionButtons =
          receiptRef.current.querySelector(".receipt-actions");
        if (actionButtons) {
          actionButtons.style.display = "none";
        }

        const canvas = await html2canvas(receiptRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
        });

        // Show the action buttons again
        if (actionButtons) {
          actionButtons.style.display = "block";
        }

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`Receipt-${receiptData.receiptNumber}.pdf`);
        message.success("PDF downloaded successfully!");
      } catch (error) {
        console.error("Error generating PDF:", error);
        message.error("Failed to generate PDF. Please try again.");
      } finally {
        setIsGeneratingPdf(false);
        message.destroy();
      }
    };

    // Print function
    const handlePrint = () => {
      const printContent = receiptRef.current;
      if (!printContent) return;

      const printWindow = window.open("", "", "width=800,height=600");
      printWindow.document.write(`
        <html>
          <head>
            <title>Receipt ${receiptData.receiptNumber}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              .receipt-actions { display: none !important; }
              @media print {
                .receipt-actions { display: none !important; }
                body { margin: 0; }
              }
            </style>
          </head>
          <body>
            ${printContent.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 250);
    };

    // Send Email function
    const handleSendEmail = async () => {
      if (!receiptData.customer.email) {
        message.error("Customer email is required to send receipt.");
        return;
      }

      try {
        setIsSendingEmail(true);
        message.loading("Sending email...", 0);

        // Hide action buttons for screenshot
        const actionButtons =
          receiptRef.current.querySelector(".receipt-actions");
        if (actionButtons) {
          actionButtons.style.display = "none";
        }

        // Generate canvas for email attachment
        const canvas = await html2canvas(receiptRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
        });

        // Show action buttons again
        if (actionButtons) {
          actionButtons.style.display = "block";
        }

        const imgData = canvas.toDataURL("image/png");

        const emailData = {
          to: receiptData.customer.email,
          customerName: receiptData.customer.name,
          receiptNumber: receiptData.receiptNumber,
          receiptDate: receiptData.purchaseDate.format("DD MMM YYYY"),
          total: calculateTotal().toFixed(2),
          receiptImage: imgData,
        };

        const response = await fetch("/api/email/receipt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        });

        if (response.ok) {
          message.success(
            `Receipt sent successfully to ${receiptData.customer.email}!`
          );
        } else {
          throw new Error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        message.error("Failed to send email. Please try again.");
      } finally {
        setIsSendingEmail(false);
        message.destroy();
      }
    };

    // Show save warning first
    const handleSaveReceipt = () => {
      Modal.confirm({
        title: "Save Receipt",
        content: (
          <div>
            <p>Are you sure you want to save this receipt?</p>
            <p style={{ color: "#ff4d4f", fontWeight: "bold" }}>
              ⚠️ Warning: Saved receipts cannot be modified.
            </p>
          </div>
        ),
        okText: "Save Receipt",
        cancelText: "Cancel",
        onOk: performSaveReceipt,
      });
    };

    // Actual save function
    const performSaveReceipt = async () => {
      if (!receiptRef.current) return;

      try {
        setIsSaving(true);
        message.loading("Saving receipt...", 0);

        // Hide action buttons for PDF generation
        const actionButtons =
          receiptRef.current.querySelector(".receipt-actions");
        if (actionButtons) {
          actionButtons.style.display = "none";
        }

        // Generate PDF
        const canvas = await html2canvas(receiptRef.current, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#ffffff",
        });

        // Show action buttons again
        if (actionButtons) {
          actionButtons.style.display = "block";
        }

        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();

        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Convert PDF to blob
        const pdfBlob = pdf.output("blob");

        // Use the utility function to save to Firebase
        await saveReceiptToFirebase(receiptData, pdfBlob);

        message.destroy();
        setShowSaveConfirmation(true);
      } catch (error) {
        console.error("Error saving receipt:", error);
        message.error("Failed to save receipt. Please try again.");
      } finally {
        setIsSaving(false);
        message.destroy();
      }
    };

    // Handle save confirmation
    const handleSaveConfirmation = () => {
      setShowSaveConfirmation(false);
      onClose(); // This will close the modal properly
    };

    return (
      <Modal
        open={open}
        onCancel={onClose}
        width={900}
        footer={null}
        styles={{ body: { padding: 0 } }}
      >
        <div ref={receiptRef} style={{ padding: "40px" }}>
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
          <div className="receipt-actions">
            <Space
              style={{
                width: "100%",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <Button
                type="primary"
                icon={<DownloadOutlined />}
                loading={isGeneratingPdf}
                onClick={handleDownloadPdf}
                style={{ minWidth: "140px" }}
              >
                Download PDF
              </Button>
              <Button
                icon={<PrinterOutlined />}
                onClick={handlePrint}
                style={{ minWidth: "100px" }}
              >
                Print
              </Button>
              <Button
                icon={<MailOutlined />}
                loading={isSendingEmail}
                onClick={handleSendEmail}
                style={{ minWidth: "120px" }}
              >
                Send Email
              </Button>
              {!isManagement && (
                <Button
                  type="primary"
                  icon={<SaveOutlined />}
                  loading={isSaving}
                  onClick={handleSaveReceipt}
                  style={{
                    backgroundColor: "#52c41a",
                    borderColor: "#52c41a",
                    minWidth: "130px",
                  }}
                >
                  Save Receipt
                </Button>
              )}
            </Space>
          </div>

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

        {/* Save Confirmation Modal */}
        <Modal
          open={showSaveConfirmation}
          title="Receipt Saved Successfully"
          onOk={handleSaveConfirmation}
          onCancel={handleSaveConfirmation}
          okText="Continue"
          cancelButtonProps={{ style: { display: "none" } }}
        >
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div
              style={{
                fontSize: "48px",
                color: "#52c41a",
                marginBottom: "16px",
              }}
            >
              ✅
            </div>
            <Typography.Title level={4} style={{ marginBottom: "8px" }}>
              Receipt Saved!
            </Typography.Title>
            <Typography.Text type="secondary">
              Receipt {receiptData?.receiptNumber} has been saved successfully.
              <br />
              <strong>Note:</strong> Saved receipts cannot be modified.
            </Typography.Text>
          </div>
        </Modal>
      </Modal>
    );
  }
);

ReceiptPreview.displayName = "ReceiptPreview";

export default ReceiptPreview;
