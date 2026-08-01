"use client";
import { Form, Select, Input, Button, Tooltip } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  StopOutlined,
  AimOutlined,
} from "@ant-design/icons";
import styles from "../admin.module.css";

// A promotion applies when at least one include rule matches and no exclude rule
// does. When several promotions match one bike the most specific wins
// (this bike > model > brand > tag > all), and only that one is shown.

const SCOPES = [
  { value: "ALL", label: "Every motorcycle", hint: "Site-wide campaign" },
  { value: "BRAND", label: "Brand", hint: "e.g. all Yamaha" },
  { value: "MODEL", label: "Model", hint: "e.g. all Y15ZR" },
  { value: "MOTORCYCLE", label: "Specific motorcycle", hint: "One listing" },
  { value: "TAG", label: "Tag", hint: "Matches the bike's tags field" },
];

const SCOPE_HINT = Object.fromEntries(SCOPES.map((s) => [s.value, s.hint]));

export default function PromotionTargets({
  brandOptions = [],
  modelOptions = [],
  motorcycleOptions = [],
  tagOptions = [],
}) {
  const optionsFor = (scope) => {
    switch (scope) {
      case "BRAND":
        return brandOptions;
      case "MODEL":
        return modelOptions;
      case "MOTORCYCLE":
        return motorcycleOptions;
      case "TAG":
        return tagOptions;
      default:
        return [];
    }
  };

  return (
    <div className={styles.panel}>
      <div className={styles.panelTitle}>
        Applies to
        <span className={styles.panelHint}>
          Leave empty to keep this promotion off motorcycle pages
        </span>
      </div>

      <Form.List name="targets">
        {(fields, { add, remove }) => (
          <>
            {fields.length === 0 ? (
              <p style={{ color: "#8c8c8c", fontSize: 13, margin: "0 0 12px" }}>
                No targeting rules. This promotion will only appear on the
                promotions page, not on any motorcycle listing or detail page.
              </p>
            ) : null}

            {fields.map((field) => (
              <Form.Item key={field.key} shouldUpdate style={{ marginBottom: 12 }}>
                {({ getFieldValue }) => {
                  const scope = getFieldValue(["targets", field.name, "scope"]);
                  const isExclusion = getFieldValue([
                    "targets",
                    field.name,
                    "isExclusion",
                  ]);
                  const choices = optionsFor(scope);

                  return (
                    <div
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      <Form.Item
                        name={[field.name, "scope"]}
                        noStyle
                        rules={[{ required: true, message: "Pick a scope" }]}
                      >
                        <Select
                          options={SCOPES}
                          placeholder="Scope"
                          style={{ minWidth: 180, flex: "1 1 180px" }}
                        />
                      </Form.Item>

                      {scope && scope !== "ALL" ? (
                        <Form.Item
                          name={[field.name, "value"]}
                          noStyle
                          rules={[
                            {
                              required: true,
                              message: `Pick a ${scope.toLowerCase()}`,
                            },
                          ]}
                        >
                          {choices.length > 0 ? (
                            <Select
                              showSearch
                              allowClear
                              options={choices}
                              optionFilterProp="label"
                              placeholder={SCOPE_HINT[scope]}
                              style={{ minWidth: 200, flex: "2 1 200px" }}
                            />
                          ) : (
                            <Input
                              placeholder={SCOPE_HINT[scope]}
                              style={{ minWidth: 200, flex: "2 1 200px" }}
                            />
                          )}
                        </Form.Item>
                      ) : (
                        <div style={{ flex: "2 1 200px" }} />
                      )}

                      <Tooltip
                        title={
                          isExclusion
                            ? "Bikes matching this rule never get the promotion"
                            : "Bikes matching this rule get the promotion"
                        }
                      >
                        <Form.Item name={[field.name, "isExclusion"]} noStyle>
                          <Select
                            style={{ width: 128 }}
                            options={[
                              {
                                value: false,
                                label: (
                                  <>
                                    <AimOutlined /> Include
                                  </>
                                ),
                              },
                              {
                                value: true,
                                label: (
                                  <>
                                    <StopOutlined /> Exclude
                                  </>
                                ),
                              },
                            ]}
                          />
                        </Form.Item>
                      </Tooltip>

                      <Button
                        icon={<DeleteOutlined />}
                        onClick={() => remove(field.name)}
                        aria-label="Remove rule"
                      />
                    </div>
                  );
                }}
              </Form.Item>
            ))}

            <Button
              type="dashed"
              icon={<PlusOutlined />}
              onClick={() => add({ scope: "BRAND", value: null, isExclusion: false })}
              block
            >
              Add targeting rule
            </Button>
          </>
        )}
      </Form.List>
    </div>
  );
}
