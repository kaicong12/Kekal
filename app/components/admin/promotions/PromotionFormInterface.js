"use client";
import { useState, useEffect } from "react";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Switch,
  Button,
  Row,
  Col,
  Upload,
  message,
  Space,
  Typography,
  Spin,
  Image,
} from "antd";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { uploadPromotionImage } from "@/utils/promotionImageUpload";
import { auth } from "@/utils/firebase";

const { TextArea } = Input;
const { Text } = Typography;
const { RangePicker } = DatePicker;

export default function PromotionFormInterface({ promotionId, onBack }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [motorcycleOptions, setMotorcycleOptions] = useState([]);

  const isEdit = !!promotionId;

  useEffect(() => {
    const loadMotorcycles = async () => {
      try {
        const res = await fetch(
          "/api/motorcycles?sortField=brand&sortOrder=asc"
        );
        const data = await res.json();
        setMotorcycleOptions(
          (data.motorcycles || []).map((m) => ({
            value: m.id,
            label: `${m.brand} ${m.name} (${m.year})`,
          }))
        );
      } catch {
        // Non-critical
      }
    };

    const loadPromotion = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/promotions/${promotionId}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        form.setFieldsValue({
          title: data.title,
          subtitle: data.subtitle || "",
          description: data.description || "",
          ctaText: data.ctaText || "Claim this deal",
          whatsappMessage: data.whatsappMessage || "",
          isFeatured: data.isFeatured,
          isActive: data.isActive,
          displayOrder: data.displayOrder ?? 0,
          motorcycleId: data.motorcycleId || undefined,
          dateRange: [dayjs(data.startDate), dayjs(data.endDate)],
        });
        setImageUrl(data.imageUrl || null);
      } catch {
        message.error("Failed to load promotion");
      } finally {
        setLoading(false);
      }
    };

    loadMotorcycles();
    if (isEdit) loadPromotion();
  }, [promotionId, isEdit, form]);

  const handleImageUpload = async (file) => {
    setUploading(true);
    try {
      const url = await uploadPromotionImage(file, promotionId || "new");
      setImageUrl(url);
      message.success("Image uploaded");
    } catch {
      message.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
    return false; // Prevent antd default upload
  };

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      const [start, end] = values.dateRange || [];
      const body = {
        title: values.title,
        subtitle: values.subtitle || null,
        description: values.description || null,
        imageUrl: imageUrl || null,
        ctaText: values.ctaText || "Claim this deal",
        whatsappMessage: values.whatsappMessage || null,
        isFeatured: !!values.isFeatured,
        isActive: values.isActive === undefined ? true : !!values.isActive,
        displayOrder: values.displayOrder ?? 0,
        motorcycleId: values.motorcycleId || null,
        startDate: start ? start.toISOString() : null,
        endDate: end ? end.toISOString() : null,
      };

      const url = isEdit ? `/api/promotions/${promotionId}` : "/api/promotions";
      const method = isEdit ? "PUT" : "POST";

      const token = await auth.currentUser?.getIdToken();
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to save promotion");
      }

      message.success(
        isEdit ? "Promotion updated successfully" : "Promotion created successfully"
      );
      onBack();
    } catch (error) {
      message.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 60 }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <div>
      <Button
        icon={<ArrowLeftOutlined />}
        onClick={onBack}
        style={{ marginBottom: 16 }}
      >
        Back to List
      </Button>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          isActive: true,
          isFeatured: false,
          displayOrder: 0,
          ctaText: "Claim this deal",
        }}
      >
        <Card title="Offer Details" style={{ marginBottom: 16 }} size="small">
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Title is required" }]}
              >
                <Input placeholder="e.g. RM 500 off any Yamaha" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="subtitle" label="Subtitle">
                <Input placeholder="e.g. + free 1st service & road tax" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="description" label="Description">
                <TextArea
                  rows={3}
                  placeholder="Short details about this offer..."
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card title="Schedule" style={{ marginBottom: 16 }} size="small">
          <Row gutter={16}>
            <Col xs={24} md={14}>
              <Form.Item
                name="dateRange"
                label="Runs from – to"
                rules={[{ required: true, message: "Start and end dates are required" }]}
              >
                <RangePicker
                  showTime
                  format="DD MMM YYYY HH:mm"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
            <Col xs={12} md={5}>
              <Form.Item
                name="isActive"
                label="Active"
                valuePropName="checked"
                tooltip="Turn off to hide the promo immediately, regardless of dates"
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={12} md={5}>
              <Form.Item
                name="isFeatured"
                label="Featured (hero)"
                valuePropName="checked"
                tooltip="Show this promo as the large hero card at the top"
              >
                <Switch />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card title="Call To Action" style={{ marginBottom: 16 }} size="small">
          <Row gutter={16}>
            <Col xs={24} md={8}>
              <Form.Item name="ctaText" label="Button text">
                <Input placeholder="Claim this deal" />
              </Form.Item>
            </Col>
            <Col xs={24} md={16}>
              <Form.Item
                name="whatsappMessage"
                label="WhatsApp message"
                tooltip="Prefilled text when a customer taps the button. Defaults to the title."
              >
                <Input placeholder="Hi, I'm interested in the RM 500 off Yamaha deal" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card
          title="Linked Motorcycle & Ordering"
          style={{ marginBottom: 16 }}
          size="small"
        >
          <Row gutter={16}>
            <Col xs={24} md={16}>
              <Form.Item
                name="motorcycleId"
                label="Linked motorcycle (optional)"
                tooltip="Attach a catalogue bike, e.g. for the featured hero"
              >
                <Select
                  allowClear
                  showSearch
                  placeholder="Search a motorcycle..."
                  options={motorcycleOptions}
                  optionFilterProp="label"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="displayOrder"
                label="Display order"
                tooltip="Lower numbers appear first"
              >
                <InputNumber min={0} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card title="Image" style={{ marginBottom: 16 }} size="small">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {imageUrl && (
              <div
                style={{
                  position: "relative",
                  border: "1px solid #d9d9d9",
                  borderRadius: 8,
                  padding: 4,
                  width: 200,
                }}
              >
                <Image
                  src={imageUrl}
                  alt="Promotion"
                  width={190}
                  height={120}
                  style={{ objectFit: "cover", borderRadius: 4 }}
                  fallback="/images/no-image.svg"
                />
                <Button
                  size="small"
                  danger
                  icon={<DeleteOutlined />}
                  onClick={() => setImageUrl(null)}
                  style={{ marginTop: 4, width: "100%" }}
                >
                  Remove
                </Button>
              </div>
            )}

            <Upload
              beforeUpload={handleImageUpload}
              showUploadList={false}
              accept="image/*"
            >
              <div
                style={{
                  width: 200,
                  height: 152,
                  border: "1px dashed #d9d9d9",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <PlusOutlined style={{ fontSize: 20 }} />
                <Text type="secondary" style={{ fontSize: 12, marginTop: 4 }}>
                  {uploading ? "Uploading..." : imageUrl ? "Replace" : "Upload"}
                </Text>
              </div>
            </Upload>
          </div>
        </Card>

        <div style={{ textAlign: "right" }}>
          <Space>
            <Button onClick={onBack}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              disabled={uploading}
            >
              {isEdit ? "Update Promotion" : "Create Promotion"}
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
}
