"use client";
import { useState, useEffect } from "react";
import {
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Switch,
  message,
  Spin,
} from "antd";
import {
  ArrowLeftOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import dayjs from "dayjs";
import { uploadPromotionImage } from "@/utils/promotionImageUpload";
import { auth } from "@/utils/firebase";
import { StatusPill } from "../adminUi";
import PromotionTargets from "./PromotionTargets";
import PromotionDiscount from "./PromotionDiscount";
import styles from "../admin.module.css";
import { uncachedUrl } from "@/utils/adminFetch";

const { TextArea } = Input;

const VISIBILITY = [
  { key: "live", label: "Live", desc: "Visible on website now" },
  { key: "scheduled", label: "Scheduled", desc: "Goes live on start date" },
  { key: "draft", label: "Draft", desc: "Hidden from public" },
];

// Derive the visibility choice from stored fields.
function deriveVisibility({ isActive, startDate }) {
  if (!isActive) return "draft";
  if (startDate && new Date(startDate) > new Date()) return "scheduled";
  return "live";
}

export default function PromotionFormInterface({ promotionId, onBack }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [motorcycleOptions, setMotorcycleOptions] = useState([]);
  const [bikesById, setBikesById] = useState({});
  const [brandOptions, setBrandOptions] = useState([]);
  const [modelOptions, setModelOptions] = useState([]);
  const [tagOptions, setTagOptions] = useState([]);
  const [visibility, setVisibility] = useState("live");
  const [title, setTitle] = useState("");

  const isEdit = !!promotionId;

  // An exact before/after preview only makes sense for a single-bike target.
  const watchedTargets = Form.useWatch("targets", form);
  const previewBike =
    bikesById[
      (watchedTargets || []).find(
        (target) => target?.scope === "MOTORCYCLE" && !target?.isExclusion
      )?.value
    ] ?? null;

  useEffect(() => {
    const loadMotorcycles = async () => {
      try {
        const res = await fetch(
          uncachedUrl("/api/motorcycles?sortField=brand&sortOrder=asc")
        );
        const data = await res.json();
        const bikes = data.motorcycles || [];

        setMotorcycleOptions(
          bikes.map((m) => ({
            value: m.id,
            label: `${m.brand} ${m.name} (${m.year})`,
          }))
        );
        setBikesById(
          Object.fromEntries(
            bikes.map((m) => [
              m.id,
              // Undiscounted price: a live promo may already have reduced it.
              { label: `${m.brand} ${m.name}`, price: m.pricing?.basePrice ?? m.price },
            ])
          )
        );

        const uniqueSorted = (values) =>
          Array.from(new Set(values.filter(Boolean))).sort();

        setBrandOptions(
          uniqueSorted(bikes.map((m) => m.brand)).map((v) => ({ value: v, label: v }))
        );
        setModelOptions(
          uniqueSorted(bikes.map((m) => m.model)).map((v) => ({ value: v, label: v }))
        );
        setTagOptions(
          uniqueSorted(
            bikes.flatMap((m) =>
              String(m.tags || "")
                .split(",")
                .map((tag) => tag.trim())
            )
          ).map((v) => ({ value: v, label: v }))
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
          displayOrder: data.displayOrder ?? 0,
          motorcycleId: data.motorcycleId || undefined,
          discountType: data.discountType || "NONE",
          discountValue:
            data.discountValue === null || data.discountValue === undefined
              ? undefined
              : Number(data.discountValue),
          targets: (data.targets || []).map((target) => ({
            scope: target.scope,
            value: target.value ?? null,
            isExclusion: !!target.isExclusion,
          })),
          startDate: dayjs(data.startDate),
          endDate: dayjs(data.endDate),
        });
        setTitle(data.title);
        setVisibility(deriveVisibility(data));
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

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
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
  };

  const handleSubmit = async (values) => {
    setSubmitting(true);
    try {
      const body = {
        title: values.title,
        subtitle: values.subtitle || null,
        description: values.description || null,
        imageUrl: imageUrl || null,
        ctaText: values.ctaText || "Claim this deal",
        whatsappMessage: values.whatsappMessage || null,
        isFeatured: !!values.isFeatured,
        isActive: visibility !== "draft",
        displayOrder: values.displayOrder ?? 0,
        motorcycleId: values.motorcycleId || null,
        discountType: values.discountType || "NONE",
        discountValue:
          values.discountType && values.discountType !== "NONE"
            ? Number(values.discountValue)
            : null,
        targets: (values.targets || [])
          .filter((target) => target?.scope)
          .map((target) => ({
            scope: target.scope,
            value: target.scope === "ALL" ? null : target.value || null,
            isExclusion: !!target.isExclusion,
          })),
        startDate: values.startDate ? values.startDate.toISOString() : null,
        endDate: values.endDate ? values.endDate.toISOString() : null,
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
      <div style={{ textAlign: "center", padding: 80 }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className={styles.adminForm}
      initialValues={{
        isFeatured: false,
        displayOrder: 0,
        ctaText: "Claim this deal",
        discountType: "NONE",
        targets: [],
      }}
    >
      {/* Sticky action bar */}
      <div className={styles.formTopbar}>
        <div className={styles.breadcrumb}>
          <button type="button" className={styles.breadcrumbLink} onClick={onBack}>
            Promotions
          </button>
          <span>›</span>
          <span className={styles.breadcrumbCurrent}>{isEdit ? "Edit offer" : "New offer"}</span>
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
          {submitting ? "Saving…" : "Save changes"}
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.formHeader}>
          <button type="button" className={styles.backBtn} onClick={onBack}>
            <ArrowLeftOutlined />
          </button>
          <div>
            <h1 className={styles.formTitle}>
              {title || "New offer"}
              <StatusPill
                statusKey={visibility}
                label={VISIBILITY.find((v) => v.key === visibility)?.label}
              />
            </h1>
          </div>
        </div>

        <div className={styles.formLayout}>
          {/* Main column */}
          <div className={styles.formMain}>
            {/* Offer details */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Offer details</div>
              <Form.Item
                name="title"
                label="Title"
                rules={[{ required: true, message: "Title is required" }]}
              >
                <Input
                  placeholder="e.g. RM 500 off any Yamaha"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Item>
              <Form.Item name="subtitle" label="Subtitle">
                <Input placeholder="e.g. + free 1st service & road tax" />
              </Form.Item>
              <Form.Item name="description" label="Description">
                <TextArea rows={3} placeholder="Short details about this offer…" />
              </Form.Item>
              <div className={styles.grid2}>
                <Form.Item name="ctaText" label="Button text">
                  <Input placeholder="Claim this deal" />
                </Form.Item>
                <Form.Item
                  name="whatsappMessage"
                  label="WhatsApp message"
                  tooltip="Prefilled text when a customer taps the button."
                >
                  <Input placeholder="Hi, I'm interested in this deal" />
                </Form.Item>
              </div>
            </div>

            {/* Media */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>
                Media
                <span className={styles.panelHint}>First image is the card thumbnail</span>
              </div>
              <div className={styles.mediaRow}>
                {imageUrl && (
                  <div className={styles.mediaTile} style={{ width: 180 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imageUrl} alt="Promotion" />
                    <div className={styles.mediaOverlay}>
                      <button
                        type="button"
                        className={styles.mediaBtn}
                        onClick={() => setImageUrl(null)}
                      >
                        <DeleteOutlined />
                      </button>
                    </div>
                  </div>
                )}
                <label className={`${styles.mediaTile} ${styles.mediaAdd}`} style={{ width: 180 }}>
                  <PlusOutlined />
                  {uploading ? "Uploading…" : imageUrl ? "Replace image" : "Hero image"}
                  <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
                </label>
              </div>
            </div>

            {/* Who the promotion applies to */}
            <PromotionTargets
              brandOptions={brandOptions}
              modelOptions={modelOptions}
              motorcycleOptions={motorcycleOptions}
              tagOptions={tagOptions}
            />
            <PromotionDiscount previewBike={previewBike} />

            {/* Card presentation */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>
                Promotions page card
                <span className={styles.panelHint}>Presentation only</span>
              </div>
              <div className={styles.grid2}>
                <Form.Item
                  name="motorcycleId"
                  label="Fallback card image (optional)"
                  tooltip="Borrows this bike's photo for the promo card when the promotion has no hero image. Does not affect who the promotion applies to — use the rules above for that."
                >
                  <Select
                    allowClear
                    showSearch
                    placeholder="Search a motorcycle…"
                    options={motorcycleOptions}
                    optionFilterProp="label"
                  />
                </Form.Item>
                <Form.Item
                  name="displayOrder"
                  label="Display order"
                  tooltip="Lower numbers appear first"
                >
                  <InputNumber min={0} style={{ width: "100%" }} />
                </Form.Item>
              </div>
            </div>
          </div>

          {/* Side rail */}
          <div className={styles.formSide}>
            {/* Status & visibility */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Status &amp; visibility</div>
              <div className={styles.radioList}>
                {VISIBILITY.map((v) => (
                  <div
                    key={v.key}
                    className={`${styles.radioItem} ${
                      visibility === v.key ? styles.radioItemActive : ""
                    }`}
                    onClick={() => setVisibility(v.key)}
                  >
                    <span className={styles.radioDot} />
                    <div>
                      <div className={styles.radioLabel}>{v.label}</div>
                      <div className={styles.radioDesc}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Schedule</div>
              <Form.Item
                name="startDate"
                label="Starts"
                rules={[{ required: true, message: "Start date is required" }]}
              >
                <DatePicker format="DD MMM YYYY" style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name="endDate"
                label="Ends"
                rules={[
                  { required: true, message: "End date is required" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      const start = getFieldValue("startDate");
                      if (!value || !start || value.isAfter(start)) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("End must be after start"));
                    },
                  }),
                ]}
              >
                <DatePicker format="DD MMM YYYY" style={{ width: "100%" }} />
              </Form.Item>
            </div>

            {/* Options */}
            <div className={styles.panel}>
              <div className={styles.panelTitle}>Options</div>
              <Form.Item
                name="isFeatured"
                label="Feature as hero"
                valuePropName="checked"
                tooltip="Show this promo as the large hero card at the top"
              >
                <Switch />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
}
