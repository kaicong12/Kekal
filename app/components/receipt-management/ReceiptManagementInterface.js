"use client";
import { useState, useEffect } from "react";
import {
  Card,
  Table,
  Button,
  Input,
  Select,
  Row,
  Col,
  Typography,
  Space,
  Tag,
  Statistic,
  message,
  Modal,
} from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownloadOutlined,
  FileTextOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import ReceiptPreview from "@/app/components/cash-sales/components/ReceiptPreview";
import {
  loadReceiptsFromFirebase,
  deleteReceiptFromFirebase,
  calculateReceiptTotal,
} from "@/utils/receiptUtils";

const { Text } = Typography;

export default function ReceiptManagementInterface() {
  const [receipts, setReceipts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredReceipts, setFilteredReceipts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("all");
  const [previewReceipt, setPreviewReceipt] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  // Statistics
  const [stats, setStats] = useState({
    totalReceipts: 0,
    totalRevenue: 0,
    totalTaxCollected: 0,
  });

  // Load receipts from Firebase
  const loadReceipts = async () => {
    setLoading(true);
    try {
      const receiptsList = await loadReceiptsFromFirebase();

      // Process the data to ensure proper date formatting
      const processedReceipts = receiptsList.map((receipt) => ({
        ...receipt,
        purchaseDate: dayjs(
          receipt.purchaseDate?.toDate?.() || receipt.purchaseDate
        ),
        createdAt: dayjs(receipt.createdAt?.toDate?.() || receipt.createdAt),
      }));

      setReceipts(processedReceipts);
      setFilteredReceipts(processedReceipts);
      calculateStats(processedReceipts);
    } catch (error) {
      console.error("Error loading receipts:", error);
      message.error("Failed to load receipts");
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (receiptsList) => {
    const totalReceipts = receiptsList.length;
    const totalRevenue = receiptsList.reduce((sum, receipt) => {
      return sum + calculateReceiptTotal(receipt.items || []);
    }, 0);

    // Assuming 6% tax rate for Malaysia (SST)
    const totalTaxCollected = totalRevenue * 0.06;

    setStats({
      totalReceipts,
      totalRevenue,
      totalTaxCollected,
    });
  };

  // Filter receipts based on search and filters
  const applyFilters = () => {
    let filtered = [...receipts];

    // Search filter
    if (searchText) {
      filtered = filtered.filter(
        (receipt) =>
          receipt.receiptNumber
            ?.toLowerCase()
            .includes(searchText.toLowerCase()) ||
          receipt.customer?.name
            ?.toLowerCase()
            .includes(searchText.toLowerCase()) ||
          receipt.customer?.email
            ?.toLowerCase()
            .includes(searchText.toLowerCase())
      );
    }

    // Year filter
    if (selectedYear !== "all") {
      filtered = filtered.filter(
        (receipt) => receipt.purchaseDate.year().toString() === selectedYear
      );
    }

    // Month filter
    if (selectedMonth !== "all") {
      filtered = filtered.filter(
        (receipt) => receipt.purchaseDate.month() === parseInt(selectedMonth)
      );
    }

    // Payment method filter
    if (selectedPaymentMethod !== "all") {
      filtered = filtered.filter(
        (receipt) => receipt.paymentMethod === selectedPaymentMethod
      );
    }

    setFilteredReceipts(filtered);
    calculateStats(filtered);
  };

  // Handle preview
  const handlePreview = (receipt) => {
    setPreviewReceipt(receipt);
    setShowPreview(true);
  };

  // Handle delete
  const handleDelete = async (receipt) => {
    Modal.confirm({
      title: "Delete Receipt",
      content: `Are you sure you want to delete receipt ${receipt.receiptNumber}?`,
      okText: "Delete",
      okType: "danger",
      onOk: async () => {
        try {
          await deleteReceiptFromFirebase(receipt.id);
          message.success("Receipt deleted successfully");
          loadReceipts();
        } catch (error) {
          console.error("Error deleting receipt:", error);
          message.error("Failed to delete receipt");
        }
      },
    });
  };

  // Handle download PDF
  const handleDownloadPDF = (receipt) => {
    if (receipt.pdfUrl) {
      window.open(receipt.pdfUrl, "_blank");
    } else {
      message.error("PDF not available for this receipt");
    }
  };

  // Calculate total for a receipt - now uses utility function
  const getReceiptTotal = (receipt) => {
    return calculateReceiptTotal(receipt.items || []);
  };

  // Table columns
  const columns = [
    {
      title: "Receipt #",
      dataIndex: "receiptNumber",
      key: "receiptNumber",
      width: 150,
      render: (text) => <Text strong>{text}</Text>,
    },
    {
      title: "Date",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
      width: 120,
      render: (date) => date?.format("DD MMM YYYY"),
      sorter: (a, b) => a.purchaseDate?.unix() - b.purchaseDate?.unix(),
    },
    {
      title: "Customer",
      key: "customer",
      width: 200,
      render: (_, record) => (
        <div>
          <div>
            <Text strong>{record.customer?.name}</Text>
          </div>
          {record.customer?.email && (
            <div>
              <Text type="secondary" style={{ fontSize: "12px" }}>
                {record.customer.email}
              </Text>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Payment",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      width: 120,
      render: (method) => (
        <Tag
          color={
            method === "Cash" ? "green" : method === "Card" ? "blue" : "orange"
          }
        >
          {method}
        </Tag>
      ),
    },
    {
      title: "Total",
      key: "total",
      width: 120,
      align: "right",
      render: (_, record) => (
        <Text strong>RM {getReceiptTotal(record).toFixed(2)}</Text>
      ),
      sorter: (a, b) => getReceiptTotal(a) - getReceiptTotal(b),
    },
    {
      title: "Actions",
      key: "actions",
      width: 150,
      render: (_, record) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EyeOutlined />}
            onClick={() => handlePreview(record)}
            title="Preview"
          />
          <Button
            type="text"
            icon={<DownloadOutlined />}
            onClick={() => handleDownloadPDF(record)}
            title="Download PDF"
            disabled={!record.pdfUrl}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record)}
            title="Delete"
          />
        </Space>
      ),
    },
  ];

  // Load receipts on component mount
  useEffect(() => {
    loadReceipts();
  }, []);

  // Apply filters when dependencies change
  useEffect(() => {
    applyFilters();
  }, [
    searchText,
    selectedYear,
    selectedMonth,
    selectedPaymentMethod,
    receipts,
  ]);

  return (
    <div style={{ padding: "24px" }}>
      {/* Statistics Cards */}
      <Row gutter={24} style={{ marginBottom: "24px" }}>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Total Receipts"
              value={stats.totalReceipts}
              prefix={<FileTextOutlined style={{ color: "#faad14" }} />}
              valueStyle={{ color: "#faad14" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card>
            <Statistic
              title="Total Revenue"
              value={`RM ${stats.totalRevenue.toFixed(2)}`}
              prefix={<DollarOutlined style={{ color: "#52c41a" }} />}
              valueStyle={{ color: "#52c41a" }}
            />
          </Card>
        </Col>
      </Row>

      {/* Main Content */}
      <Row>
        <Col span={24}>
          <Card
            title={
              <Space>
                <FileTextOutlined />
                <span>Receipts ({filteredReceipts.length})</span>
              </Space>
            }
          >
            {/* Filters & Search */}
            <Row gutter={16} style={{ marginBottom: "16px" }}>
              <Col xs={24} sm={24} md={6}>
                <Input
                  placeholder="Search customer, receipt #, email..."
                  prefix={<SearchOutlined />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  allowClear
                />
              </Col>
              <Col xs={24} sm={8} md={4}>
                <Select
                  placeholder="Year"
                  value={selectedYear}
                  onChange={setSelectedYear}
                  style={{ width: "100%" }}
                  options={[
                    { value: "all", label: "All Years" },
                    { value: "2025", label: "2025" },
                    { value: "2024", label: "2024" },
                    { value: "2023", label: "2023" },
                  ]}
                />
              </Col>
              <Col xs={24} sm={8} md={5}>
                <Select
                  placeholder="Month"
                  value={selectedMonth}
                  onChange={setSelectedMonth}
                  style={{ width: "100%" }}
                  options={[
                    { value: "all", label: "All Months" },
                    { value: "0", label: "January" },
                    { value: "1", label: "February" },
                    { value: "2", label: "March" },
                    { value: "3", label: "April" },
                    { value: "4", label: "May" },
                    { value: "5", label: "June" },
                    { value: "6", label: "July" },
                    { value: "7", label: "August" },
                    { value: "8", label: "September" },
                    { value: "9", label: "October" },
                    { value: "10", label: "November" },
                    { value: "11", label: "December" },
                  ]}
                />
              </Col>
              <Col xs={24} sm={8} md={5}>
                <Select
                  placeholder="Payment Method"
                  value={selectedPaymentMethod}
                  onChange={setSelectedPaymentMethod}
                  style={{ width: "100%" }}
                  options={[
                    { value: "all", label: "All Methods" },
                    { value: "Cash", label: "Cash" },
                    { value: "Card", label: "Card" },
                    { value: "Online Transfer", label: "Online Transfer" },
                  ]}
                />
              </Col>
            </Row>

            {/* Table */}
            <Table
              columns={columns}
              dataSource={filteredReceipts}
              rowKey="id"
              loading={loading}
              pagination={{
                pageSize: 10,
                showSizeChanger: true,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} of ${total} receipts`,
              }}
              scroll={{ x: 800 }}
            />
          </Card>
        </Col>
      </Row>

      {/* Receipt Preview Modal */}
      {previewReceipt && (
        <ReceiptPreview
          open={showPreview}
          onClose={() => {
            setShowPreview(false);
            setPreviewReceipt(null);
          }}
          receiptData={previewReceipt}
          calculateTotal={() => getReceiptTotal(previewReceipt)}
          isManagement={true}
        />
      )}
    </div>
  );
}
