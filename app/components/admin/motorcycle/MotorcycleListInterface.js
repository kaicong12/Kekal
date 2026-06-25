"use client";
import { useState, useEffect, useCallback } from "react";
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
  Statistic,
  message,
  Modal,
  Image,
  Tag,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
  PlusOutlined,
  CarOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { auth } from "@/utils/firebase";

const { Text } = Typography;

export default function MotorcycleListInterface({ onCreateNew, onEdit, isMobile }) {
  const [motorcycles, setMotorcycles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brands, setBrands] = useState([]);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

  const fetchMotorcycles = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchText) params.set("search", searchText);
      if (selectedBrand) params.set("brand", selectedBrand);
      params.set("sortField", "createdAt");
      params.set("sortOrder", "desc");

      const res = await fetch(`/api/motorcycles?${params}`);
      const data = await res.json();
      setMotorcycles(data.motorcycles || []);
      setTotal(data.total || 0);
    } catch {
      message.error("Failed to load motorcycles");
    } finally {
      setLoading(false);
    }
  }, [searchText, selectedBrand]);

  const fetchBrands = async () => {
    try {
      const res = await fetch("/api/motorcycles/brands");
      const data = await res.json();
      setBrands(data.brands || []);
    } catch {
      // Brands filter is non-critical
    }
  };

  useEffect(() => {
    fetchMotorcycles();
  }, [fetchMotorcycles]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const handleDelete = (motorcycle) => {
    Modal.confirm({
      title: "Delete Motorcycle",
      content: `Are you sure you want to delete "${motorcycle.brand} ${motorcycle.name}"? This action cannot be undone.`,
      okText: "Delete",
      okType: "danger",
      onOk: async () => {
        try {
          const token = await auth.currentUser?.getIdToken();
          const res = await fetch(`/api/motorcycles/${motorcycle.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) throw new Error();
          message.success("Motorcycle deleted successfully");
          fetchMotorcycles();
        } catch {
          message.error("Failed to delete motorcycle");
        }
      },
    });
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "image",
      width: 80,
      render: (url) => (
        <Image
          src={url}
          alt="motorcycle"
          width={60}
          height={45}
          style={{ objectFit: "cover", borderRadius: 4 }}
          fallback="/images/no-image.svg"
          preview={false}
        />
      ),
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      sorter: (a, b) => a.brand.localeCompare(b.brand),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name, record) => (
        <div>
          <Text strong>{name}</Text>
          <br />
          <Text type="secondary" style={{ fontSize: 12 }}>
            {record.model}
          </Text>
        </div>
      ),
    },
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      width: 80,
      sorter: (a, b) => a.year.localeCompare(b.year),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: 120,
      sorter: (a, b) => a.price - b.price,
      render: (price) => `RM ${Number(price).toLocaleString()}`,
    },
    {
      title: "Actions",
      key: "actions",
      width: 120,
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            size="small"
            icon={<EditOutlined />}
            onClick={() => onEdit(record.id)}
          />
          <Button
            danger
            size="small"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          />
        </Space>
      ),
    },
  ];

  if (isMobile) {
    return (
      <div>
        <div style={{ display: "flex", gap: 10, marginBottom: 16, paddingTop: 8 }}>
          <div style={mobileStyles.statCard}>
            <div style={mobileStyles.statValue}>{total}</div>
            <div style={mobileStyles.statLabel}>On site</div>
          </div>
          <div style={mobileStyles.statCard}>
            <div style={mobileStyles.statValue}>
              {brands.length}
            </div>
            <div style={mobileStyles.statLabel}>Brands</div>
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <Input
            placeholder="Search bikes..."
            prefix={<SearchOutlined style={{ color: "#bbb" }} />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            allowClear
            style={{ borderRadius: 8 }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: 40, color: "#999" }}>Loading...</div>
          ) : motorcycles.length === 0 ? (
            <div style={{ textAlign: "center", padding: 40, color: "#999" }}>No motorcycles found</div>
          ) : (
            motorcycles.map((moto) => (
              <div
                key={moto.id}
                onClick={() => onEdit(moto.id)}
                style={mobileStyles.listCard}
              >
                <div style={mobileStyles.listCardImage}>
                  <Image
                    src={moto.imageUrl}
                    alt={moto.name}
                    width={56}
                    height={42}
                    style={{ objectFit: "cover", borderRadius: 6 }}
                    fallback="/images/no-image.svg"
                    preview={false}
                  />
                </div>
                <div style={mobileStyles.listCardContent}>
                  <Text strong style={{ fontSize: 14, display: "block" }}>
                    {moto.brand} {moto.name}
                  </Text>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                    <Text style={{ fontSize: 13, color: "#f5c34b", fontWeight: 600 }}>
                      RM {Number(moto.price).toLocaleString()}
                    </Text>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {moto.year}
                    </Text>
                  </div>
                </div>
                <RightOutlined style={{ color: "#ccc", fontSize: 12 }} />
              </div>
            ))
          )}
        </div>

        <button
          onClick={onCreateNew}
          style={mobileStyles.fab}
        >
          <PlusOutlined style={{ fontSize: 18 }} />
          <span style={{ fontSize: 14, fontWeight: 500 }}>New</span>
        </button>
      </div>
    );
  }

  return (
    <div>
      <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
        <Col xs={12} sm={8}>
          <Card size="small">
            <Statistic
              title="Total Motorcycles"
              value={total}
              prefix={<CarOutlined style={{ color: "#1890ff" }} />}
            />
          </Card>
        </Col>
      </Row>

      <Card
        title="Motorcycle Inventory"
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={onCreateNew}
          >
            Add Motorcycle
          </Button>
        }
      >
        <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
          <Col xs={24} sm={12} md={8}>
            <Input
              placeholder="Search by name, brand, model..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Select
              placeholder="Filter by brand"
              value={selectedBrand || undefined}
              onChange={(val) => setSelectedBrand(val || "")}
              allowClear
              style={{ width: "100%" }}
            >
              {brands.map((brand) => (
                <Select.Option key={brand} value={brand}>
                  {brand}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>

        <Table
          columns={columns}
          dataSource={motorcycles}
          rowKey="id"
          loading={loading}
          pagination={{
            ...pagination,
            total,
            showSizeChanger: true,
            showTotal: (t) => `Total ${t} motorcycles`,
            onChange: (page, pageSize) =>
              setPagination({ current: page, pageSize }),
          }}
          scroll={{ x: 800 }}
        />
      </Card>
    </div>
  );
}

const mobileStyles = {
  statCard: {
    background: "#fff8e6",
    borderRadius: 10,
    padding: "12px 20px",
    minWidth: 80,
    textAlign: "center",
    border: "1px solid #f5e6b8",
  },
  statValue: {
    fontSize: 22,
    fontWeight: 700,
    color: "#333",
  },
  statLabel: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  listCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "12px 14px",
    background: "#fff",
    borderRadius: 10,
    border: "1px solid #f0f0f0",
    cursor: "pointer",
  },
  listCardImage: {
    flexShrink: 0,
    width: 56,
    height: 42,
    borderRadius: 6,
    overflow: "hidden",
    background: "#f5f5f5",
  },
  listCardContent: {
    flex: 1,
    minWidth: 0,
  },
  fab: {
    position: "fixed",
    bottom: 80,
    right: 20,
    background: "#f5c34b",
    color: "#000",
    border: "none",
    borderRadius: 28,
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    gap: 6,
    boxShadow: "0 4px 12px rgba(245, 195, 75, 0.4)",
    cursor: "pointer",
    zIndex: 50,
    fontWeight: 500,
  },
};
