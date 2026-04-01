"use client";
import { useState, useEffect } from "react";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Row,
  Col,
  Upload,
  message,
  Space,
  Typography,
  Spin,
  Image,
  AutoComplete,
} from "antd";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  DeleteOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import { uploadMotorcycleImage } from "@/utils/motorcycleImageUpload";
import { auth } from "@/utils/firebase";

const { TextArea } = Input;
const { Text } = Typography;

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: currentYear - 2014 + 2 }, (_, i) => ({
  value: String(currentYear + 1 - i),
  label: String(currentYear + 1 - i),
}));

export default function MotorcycleFormInterface({ motorcycleId, onBack }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [brandOptions, setBrandOptions] = useState([]);

  const isEdit = !!motorcycleId;

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const res = await fetch("/api/motorcycles/brands");
        const data = await res.json();
        setBrandOptions(
          (data.brands || []).map((b) => ({ value: b, label: b }))
        );
      } catch {
        // Non-critical
      }
    };

    const loadMotorcycle = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/motorcycles/${motorcycleId}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        form.setFieldsValue({
          brand: data.brand,
          name: data.name,
          model: data.model,
          year: data.year,
          price: Number(data.price),
          engine: data.engine,
          engineCapacity: data.engineCapacity,
          gear: data.gear,
          color: data.color,
          tags: data.tags || "",
          description: data.description || "",
          specification: data.specification
            ? JSON.stringify(data.specification, null, 2)
            : "",
        });
        setImages(
          (data.images || []).map((img) => ({
            url: img.url,
            displayOrder: img.displayOrder,
          }))
        );
      } catch {
        message.error("Failed to load motorcycle");
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
    if (isEdit) loadMotorcycle();
  }, [motorcycleId, isEdit, form]);

  const handleImageUpload = async (file) => {
    setUploading(true);
    try {
      const id = motorcycleId || "new";
      const url = await uploadMotorcycleImage(file, id);
      setImages((prev) => [
        ...prev,
        { url, displayOrder: prev.length },
      ]);
      message.success("Image uploaded");
    } catch {
      message.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
    return false; // Prevent antd default upload
  };

  const handleRemoveImage = (index) => {
    setImages((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      return updated.map((img, i) => ({ ...img, displayOrder: i }));
    });
  };

  const handleMoveImage = (index, direction) => {
    setImages((prev) => {
      const updated = [...prev];
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= updated.length) return prev;
      [updated[index], updated[targetIndex]] = [
        updated[targetIndex],
        updated[index],
      ];
      return updated.map((img, i) => ({ ...img, displayOrder: i }));
    });
  };

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      let specification = null;
      if (values.specification?.trim()) {
        try {
          specification = JSON.parse(values.specification);
        } catch {
          message.error("Invalid JSON in specification field");
          setSubmitting(false);
          return;
        }
      }

      const body = {
        brand: values.brand,
        name: values.name,
        model: values.model,
        year: values.year,
        price: values.price,
        engine: values.engine,
        engineCapacity: values.engineCapacity,
        gear: values.gear,
        color: values.color,
        tags: values.tags || null,
        description: values.description || null,
        specification,
        images: images.map((img, i) => ({
          url: img.url,
          displayOrder: i,
        })),
      };

      const url = isEdit
        ? `/api/motorcycles/${motorcycleId}`
        : "/api/motorcycles";
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
        throw new Error(err.error || "Failed to save motorcycle");
      }

      message.success(
        isEdit
          ? "Motorcycle updated successfully"
          : "Motorcycle created successfully"
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
        initialValues={{}}
      >
        {/* Basic Info */}
        <Card
          title="Basic Information"
          style={{ marginBottom: 16 }}
          size="small"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name="brand"
                label="Brand"
                rules={[{ required: true, message: "Brand is required" }]}
              >
                <AutoComplete
                  options={brandOptions}
                  placeholder="e.g. Honda"
                  filterOption={(input, option) =>
                    option.value.toLowerCase().includes(input.toLowerCase())
                  }
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input placeholder="e.g. Wave 125i" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name="model"
                label="Model"
                rules={[{ required: true, message: "Model is required" }]}
              >
                <Input placeholder="e.g. Wave125i-2024" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Form.Item
                name="year"
                label="Year"
                rules={[{ required: true, message: "Year is required" }]}
              >
                <Select options={yearOptions} placeholder="Select year" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Form.Item
                name="price"
                label="Price (RM)"
                rules={[{ required: true, message: "Price is required" }]}
              >
                <InputNumber
                  min={0}
                  step={100}
                  style={{ width: "100%" }}
                  formatter={(v) =>
                    `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  parser={(v) => v.replace(/\$\s?|(,*)/g, "")}
                  placeholder="e.g. 5800"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Technical Specs */}
        <Card
          title="Technical Specifications"
          style={{ marginBottom: 16 }}
          size="small"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name="engine"
                label="Engine"
                rules={[{ required: true, message: "Engine is required" }]}
              >
                <Input placeholder="e.g. Single Cylinder 4-Stroke" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name="engineCapacity"
                label="Engine Capacity (cc)"
                rules={[
                  { required: true, message: "Engine capacity is required" },
                ]}
              >
                <InputNumber
                  min={1}
                  style={{ width: "100%" }}
                  placeholder="e.g. 125"
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name="gear"
                label="Gear / Transmission"
                rules={[{ required: true, message: "Gear is required" }]}
              >
                <Input placeholder="e.g. 4-Speed Rotary" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                name="color"
                label="Color"
                rules={[{ required: true, message: "Color is required" }]}
              >
                <Input placeholder="e.g. Pearl White" />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Additional Info */}
        <Card
          title="Additional Information"
          style={{ marginBottom: 16 }}
          size="small"
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="tags" label="Tags">
                <Input placeholder="Comma-separated, e.g. popular, new arrival" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="description" label="Description">
                <TextArea rows={4} placeholder="Motorcycle description..." />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="specification"
                label="Specification (JSON)"
                help="Structured specs as JSON, e.g. { &quot;General&quot;: { &quot;Weight&quot;: &quot;100kg&quot; } }"
              >
                <TextArea
                  rows={6}
                  placeholder='{ "General": { "Weight": "100kg" }, "Performance": { "Top Speed": "110km/h" } }'
                  style={{ fontFamily: "monospace" }}
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>

        {/* Images */}
        <Card title="Images" style={{ marginBottom: 16 }} size="small">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {images.map((img, index) => (
              <div
                key={img.url}
                style={{
                  position: "relative",
                  border: "1px solid #d9d9d9",
                  borderRadius: 8,
                  padding: 4,
                  width: 120,
                }}
              >
                <Image
                  src={img.url}
                  alt={`Image ${index + 1}`}
                  width={110}
                  height={80}
                  style={{ objectFit: "cover", borderRadius: 4 }}
                  fallback="/images/no-image.svg"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    marginTop: 4,
                  }}
                >
                  <Button
                    size="small"
                    icon={<ArrowUpOutlined />}
                    disabled={index === 0}
                    onClick={() => handleMoveImage(index, -1)}
                  />
                  <Button
                    size="small"
                    icon={<ArrowDownOutlined />}
                    disabled={index === images.length - 1}
                    onClick={() => handleMoveImage(index, 1)}
                  />
                  <Button
                    size="small"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => handleRemoveImage(index)}
                  />
                </div>
                <Text
                  type="secondary"
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: 11,
                  }}
                >
                  #{index + 1}
                </Text>
              </div>
            ))}

            <Upload
              beforeUpload={handleImageUpload}
              showUploadList={false}
              accept="image/*"
            >
              <div
                style={{
                  width: 120,
                  height: 120,
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
                  {uploading ? "Uploading..." : "Upload"}
                </Text>
              </div>
            </Upload>
          </div>
        </Card>

        {/* Submit */}
        <div style={{ textAlign: "right" }}>
          <Space>
            <Button onClick={onBack}>Cancel</Button>
            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              disabled={uploading}
            >
              {isEdit ? "Update Motorcycle" : "Create Motorcycle"}
            </Button>
          </Space>
        </div>
      </Form>
    </div>
  );
}
