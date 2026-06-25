"use client";
import { useState, useEffect, useCallback } from "react";
import {
  Card,
  Table,
  Button,
  Typography,
  Space,
  Statistic,
  Row,
  Col,
  Tag,
  message,
  Modal,
  Image,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  TagsOutlined,
  StarFilled,
  RightOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { auth } from "@/utils/firebase";

const { Text } = Typography;

export function getPromotionStatus(promotion) {
  const now = new Date();
  const start = new Date(promotion.startDate);
  const end = new Date(promotion.endDate);

  if (!promotion.isActive) return { label: "Hidden", color: "default" };
  if (now < start) return { label: "Scheduled", color: "blue" };
  if (now > end) return { label: "Expired", color: "red" };
  return { label: "Live", color: "green" };
}

const formatDate = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatDateShort = (value) =>
  new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

export default function PromotionListInterface({ onCreateNew, onEdit, isMobile }) {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPromotions = useCallback(async () => {
    setLoading(true);
    try {
      const token = await auth.currentUser?.getIdToken();
      const res = await fetch("/api/promotions?all=true", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPromotions(data.promotions || []);
    } catch {
      message.error("Failed to load promotions");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPromotions();
  }, [fetchPromotions]);

  const handleDelete = (promotion) => {
    Modal.confirm({
      title: "Delete Promotion",
      content: `Are you sure you want to delete "${promotion.title}"? This action cannot be undone.`,
      okText: "Delete",
      okType: "danger",
      onOk: async () => {
        try {
          const token = await auth.currentUser?.getIdToken();
          const res = await fetch(`/api/promotions/${promotion.id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok) throw new Error();
          message.success("Promotion deleted successfully");
          fetchPromotions();
        } catch {
          message.error("Failed to delete promotion");
        }
      },
    });
  };

  const liveCount = promotions.filter(
    (p) => getPromotionStatus(p).label === "Live"
  ).length;

  const scheduledCount = promotions.filter(
    (p) => getPromotionStatus(p).label === "Scheduled"
  ).length;

  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "image",
      width: 80,
      render: (url) => (
        <Image
          src={url || "/images/no-image.svg"}
          alt="promotion"
          width={60}
          height={45}
          style={{ objectFit: "cover", borderRadius: 4 }}
          fallback="/images/no-image.svg"
          preview={false}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (title, record) => (
        <div>
          <Space size={4}>
            {record.isFeatured && <StarFilled style={{ color: "#faad14" }} />}
            <Text strong>{title}</Text>
          </Space>
          {record.subtitle && (
            <>
              <br />
              <Text type="secondary" style={{ fontSize: 12 }}>
                {record.subtitle}
              </Text>
            </>
          )}
        </div>
      ),
    },
    {
      title: "Status",
      key: "status",
      width: 110,
      render: (_, record) => {
        const status = getPromotionStatus(record);
        return <Tag color={status.color}>{status.label}</Tag>;
      },
    },
    {
      title: "Runs",
      key: "dates",
      width: 200,
      render: (_, record) => (
        <Text style={{ fontSize: 13 }}>
          {formatDate(record.startDate)} – {formatDate(record.endDate)}
        </Text>
      ),
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
            <div style={{ ...mobileStyles.statValue, color: "#52c41a" }}>{liveCount}</div>
            <div style={mobileStyles.statLabel}>Live</div>
          </div>
          <div style={mobileStyles.statCard}>
            <div style={mobileStyles.statValue}>{scheduledCount}</div>
            <div style={mobileStyles.statLabel}>Scheduled</div>
          </div>
          <div style={mobileStyles.statCard}>
            <div style={mobileStyles.statValue}>{promotions.length}</div>
            <div style={mobileStyles.statLabel}>Total</div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: 40, color: "#999" }}>Loading...</div>
          ) : promotions.length === 0 ? (
            <div style={{ textAlign: "center", padding: 40, color: "#999" }}>No promotions yet</div>
          ) : (
            promotions.map((promo) => {
              const status = getPromotionStatus(promo);
              return (
                <div
                  key={promo.id}
                  onClick={() => onEdit(promo.id)}
                  style={mobileStyles.listCard}
                >
                  <div style={mobileStyles.listCardImage}>
                    <Image
                      src={promo.imageUrl || "/images/no-image.svg"}
                      alt={promo.title}
                      width={56}
                      height={56}
                      style={{ objectFit: "cover", borderRadius: 6 }}
                      fallback="/images/no-image.svg"
                      preview={false}
                    />
                  </div>
                  <div style={mobileStyles.listCardContent}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                      <Tag
                        color={status.color}
                        style={{ margin: 0, fontSize: 11, lineHeight: "18px", padding: "0 6px" }}
                      >
                        {status.label}
                      </Tag>
                      {promo.isFeatured && <StarFilled style={{ color: "#faad14", fontSize: 12 }} />}
                    </div>
                    <Text strong style={{ fontSize: 14, display: "block" }}>
                      {promo.title}
                    </Text>
                    <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 4 }}>
                      <CalendarOutlined style={{ fontSize: 11, color: "#999" }} />
                      <Text style={{ fontSize: 12, color: "#999" }}>
                        Ends {formatDateShort(promo.endDate)}
                      </Text>
                    </div>
                  </div>
                  <RightOutlined style={{ color: "#ccc", fontSize: 12 }} />
                </div>
              );
            })
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
              title="Total Promotions"
              value={promotions.length}
              prefix={<TagsOutlined style={{ color: "#1890ff" }} />}
            />
          </Card>
        </Col>
        <Col xs={12} sm={8}>
          <Card size="small">
            <Statistic
              title="Live Now"
              value={liveCount}
              valueStyle={{ color: "#52c41a" }}
            />
          </Card>
        </Col>
      </Row>

      <Card
        title="Promotions"
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreateNew}>
            Add Promotion
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={promotions}
          rowKey="id"
          loading={loading}
          pagination={{ pageSize: 10, showSizeChanger: true }}
          scroll={{ x: 700 }}
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
    height: 56,
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
