"use client";
import { useState, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Spin,
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
import styles from "../admin.module.css";

const { TextArea } = Input;

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
  const [heading, setHeading] = useState({ name: "", brand: "", year: "" });

  const isEdit = !!motorcycleId;

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const res = await fetch("/api/motorcycles/brands");
        const data = await res.json();
        setBrandOptions((data.brands || []).map((b) => ({ value: b, label: b })));
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
        setHeading({ name: data.name, brand: data.brand, year: data.year });
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

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setUploading(true);
    try {
      const id = motorcycleId || "new";
      const url = await uploadMotorcycleImage(file, id);
      setImages((prev) => [...prev, { url, displayOrder: prev.length }]);
      message.success("Image uploaded");
    } catch {
      message.error("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleRemoveImage = (index) => {
    setImages((prev) =>
      prev.filter((_, i) => i !== index).map((img, i) => ({ ...img, displayOrder: i }))
    );
  };

  const handleMoveImage = (index, direction) => {
    setImages((prev) => {
      const updated = [...prev];
      const target = index + direction;
      if (target < 0 || target >= updated.length) return prev;
      [updated[index], updated[target]] = [updated[target], updated[index]];
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
        images: images.map((img, i) => ({ url: img.url, displayOrder: i })),
      };

      const url = isEdit ? `/api/motorcycles/${motorcycleId}` : "/api/motorcycles";
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
        isEdit ? "Motorcycle updated successfully" : "Motorcycle created successfully"
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
      <div style={{ textAlign: "center", padding: 80 }}>
        <Spin size="large" />
      </div>
    );
  }

  const title = isEdit ? `${heading.brand} ${heading.name}`.trim() || "Motorcycle" : "New motorcycle";

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className={styles.adminForm}
      initialValues={{}}
    >
      {/* Sticky action bar */}
      <div className={styles.formTopbar}>
        <div className={styles.breadcrumb}>
          <button type="button" className={styles.breadcrumbLink} onClick={onBack}>
            Listings
          </button>
          <span>›</span>
          <span className={styles.breadcrumbCurrent}>{isEdit ? "Edit bike" : "New bike"}</span>
        </div>
        <span className={styles.topbarSpacer} />
        <button type="button" className={styles.ghostBtn} onClick={onBack}>
          Discard
        </button>
        <button
          type="submit"
          className={styles.primaryBtn}
          disabled={submitting || uploading}
        >
          {submitting ? "Saving…" : "Save bike"}
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.formHeader}>
          <button type="button" className={styles.backBtn} onClick={onBack}>
            <ArrowLeftOutlined />
          </button>
          <div>
            <h1 className={styles.formTitle}>{title}</h1>
            {isEdit && (
              <div className={styles.formTitleMeta}>
                {heading.brand} · {heading.year}
              </div>
            )}
          </div>
        </div>

        <div className={styles.formLayout}>
          {/* Main column */}
          <div className={styles.formMain}>
            {/* Photos */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>
                Photos
                <span className={styles.panelHint}>Drag order · first is cover</span>
              </div>
              <div className={styles.mediaRow}>
                {images.map((img, index) => (
                  <div key={img.url} className={styles.mediaTile}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.url} alt={`Photo ${index + 1}`} />
                    <div className={styles.mediaOverlay}>
                      <button
                        type="button"
                        className={styles.mediaBtn}
                        disabled={index === 0}
                        onClick={() => handleMoveImage(index, -1)}
                      >
                        <ArrowUpOutlined />
                      </button>
                      <button
                        type="button"
                        className={styles.mediaBtn}
                        disabled={index === images.length - 1}
                        onClick={() => handleMoveImage(index, 1)}
                      >
                        <ArrowDownOutlined />
                      </button>
                      <button
                        type="button"
                        className={styles.mediaBtn}
                        onClick={() => handleRemoveImage(index)}
                      >
                        <DeleteOutlined />
                      </button>
                    </div>
                  </div>
                ))}
                <label className={`${styles.mediaTile} ${styles.mediaAdd}`}>
                  <PlusOutlined />
                  {uploading ? "Uploading…" : "Add photo"}
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
            </div>

            {/* Basics */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Basics</div>
              <Form.Item
                name="name"
                label="Model name"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input placeholder="e.g. Y15ZR V2" />
              </Form.Item>
              <div className={styles.grid3}>
                <Form.Item
                  name="brand"
                  label="Brand"
                  rules={[{ required: true, message: "Brand is required" }]}
                >
                  <AutoComplete
                    options={brandOptions}
                    placeholder="e.g. Yamaha"
                    filterOption={(input, option) =>
                      option.value.toLowerCase().includes(input.toLowerCase())
                    }
                  />
                </Form.Item>
                <Form.Item
                  name="year"
                  label="Year"
                  rules={[{ required: true, message: "Year is required" }]}
                >
                  <Select options={yearOptions} placeholder="Select" />
                </Form.Item>
                <Form.Item
                  name="model"
                  label="Model code"
                  rules={[{ required: true, message: "Model is required" }]}
                >
                  <Input placeholder="e.g. Y15-24" />
                </Form.Item>
              </div>
              <Form.Item name="description" label="Description">
                <TextArea rows={3} placeholder="Short description shown on the listing…" />
              </Form.Item>
            </div>

            {/* Specifications */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Specifications</div>
              <div className={styles.grid2}>
                <Form.Item
                  name="engine"
                  label="Engine"
                  rules={[{ required: true, message: "Engine is required" }]}
                >
                  <Input placeholder="e.g. Single Cylinder 4-Stroke" />
                </Form.Item>
                <Form.Item
                  name="engineCapacity"
                  label="Engine capacity (cc)"
                  rules={[{ required: true, message: "Engine capacity is required" }]}
                >
                  <InputNumber min={1} style={{ width: "100%" }} placeholder="e.g. 150" />
                </Form.Item>
                <Form.Item
                  name="gear"
                  label="Transmission"
                  rules={[{ required: true, message: "Gear is required" }]}
                >
                  <Input placeholder="e.g. 5-Speed" />
                </Form.Item>
                <Form.Item
                  name="color"
                  label="Color"
                  rules={[{ required: true, message: "Color is required" }]}
                >
                  <Input placeholder="e.g. Matte Blue" />
                </Form.Item>
              </div>
              <Form.Item
                name="specification"
                label="Detailed specs (JSON)"
                help='Structured specs, e.g. { "General": { "Weight": "100kg" } }'
              >
                <TextArea
                  rows={6}
                  placeholder='{ "General": { "Weight": "100kg" } }'
                  style={{ fontFamily: "monospace" }}
                />
              </Form.Item>
            </div>
          </div>

          {/* Side rail */}
          <div className={styles.formSide}>
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Pricing</div>
              <Form.Item
                name="price"
                label="Selling price (RM)"
                rules={[{ required: true, message: "Price is required" }]}
              >
                <InputNumber
                  min={0}
                  step={100}
                  style={{ width: "100%" }}
                  formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  parser={(v) => v.replace(/\$\s?|(,*)/g, "")}
                  placeholder="e.g. 8998"
                />
              </Form.Item>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelTitle}>Merchandising</div>
              <Form.Item
                name="tags"
                label="Tags"
                help="Comma-separated, e.g. popular, new arrival"
              >
                <Input placeholder="popular, new arrival" />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
