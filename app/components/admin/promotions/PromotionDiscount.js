"use client";
import { Form, Select, InputNumber } from "antd";
import styles from "../admin.module.css";

// Optional on purpose: a promotion can be a free helmet or free first service,
// in which case the price is left alone and the campaign copy carries the offer.

const DISCOUNT_TYPES = [
  { value: "NONE", label: "No price change" },
  { value: "FIXED_AMOUNT", label: "Amount off (RM)" },
  { value: "PERCENTAGE", label: "Percentage off (%)" },
  { value: "OVERRIDE_PRICE", label: "Set an exact price (RM)" },
];

const rm = (n) => `RM ${Number(n || 0).toLocaleString("en-MY")}`;

// Mirrors utils/promotions.js effectivePrice so staff preview the real number.
function preview(basePrice, type, value) {
  const base = Number(basePrice) || 0;
  const v = Number(value);
  if (!base || !Number.isFinite(v) || v <= 0) return null;

  let price;
  if (type === "FIXED_AMOUNT") price = base - v;
  else if (type === "PERCENTAGE") price = base * (1 - Math.min(v, 100) / 100);
  else if (type === "OVERRIDE_PRICE") price = v;
  else return null;

  price = Math.max(Math.round(price), 0);
  if (price >= base) return { invalid: true, base };
  return { base, price, savings: base - price };
}

export default function PromotionDiscount({ previewBike }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelTitle}>
        Discount
        <span className={styles.panelHint}>Leave as “No price change” for gift offers</span>
      </div>

      <Form.Item shouldUpdate noStyle>
        {({ getFieldValue }) => {
          const type = getFieldValue("discountType") || "NONE";
          const value = getFieldValue("discountValue");
          const result = previewBike
            ? preview(previewBike.price, type, value)
            : null;

          return (
            <>
              <div className={styles.grid2}>
                <Form.Item name="discountType" label="Type">
                  <Select options={DISCOUNT_TYPES} />
                </Form.Item>
                {type !== "NONE" ? (
                  <Form.Item
                    name="discountValue"
                    label={type === "PERCENTAGE" ? "Percent off" : "Amount (RM)"}
                    rules={[
                      { required: true, message: "Enter a value" },
                      {
                        type: "number",
                        min: type === "PERCENTAGE" ? 0.1 : 1,
                        max: type === "PERCENTAGE" ? 100 : undefined,
                        message:
                          type === "PERCENTAGE"
                            ? "Must be between 0.1 and 100"
                            : "Must be greater than zero",
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      style={{ width: "100%" }}
                      addonBefore={type === "PERCENTAGE" ? undefined : "RM"}
                      addonAfter={type === "PERCENTAGE" ? "%" : undefined}
                    />
                  </Form.Item>
                ) : null}
              </div>

              {type !== "NONE" && previewBike ? (
                <p style={{ fontSize: 13, margin: 0, color: "#595959" }}>
                  {result?.invalid ? (
                    <span style={{ color: "#d1503c" }}>
                      This discount does not reduce the price of{" "}
                      {previewBike.label} ({rm(previewBike.price)}) — the
                      storefront will ignore it and show the normal price.
                    </span>
                  ) : result ? (
                    <>
                      {previewBike.label}:{" "}
                      <s style={{ opacity: 0.7 }}>{rm(result.base)}</s>{" "}
                      <b>{rm(result.price)}</b> — saves {rm(result.savings)}
                    </>
                  ) : (
                    <>Enter a value to preview the price.</>
                  )}
                </p>
              ) : type !== "NONE" ? (
                <p style={{ fontSize: 13, margin: 0, color: "#8c8c8c" }}>
                  Applied to every bike this promotion targets. Add a “Specific
                  motorcycle” rule above to preview the exact price.
                </p>
              ) : null}
            </>
          );
        }}
      </Form.Item>
    </div>
  );
}
