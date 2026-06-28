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

export default function PromotionListInterface({ onCreateNew, onEdit }) {
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
        // Stop propagation so the buttons don't also trigger the row's
        // onClick (which opens the edit page).
        <Space onClick={(e) => e.stopPropagation()}>
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
          onRow={(record) => ({
            onClick: () => onEdit(record.id),
            style: { cursor: "pointer" },
          })}
        />
      </Card>
    </div>
  );
}
