"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import SiteHeader from "@/app/components/motorkekal/SiteHeader";
import SiteFooter from "@/app/components/motorkekal/SiteFooter";
import MobileBar from "@/app/components/motorkekal/MobileBar";
import styles from "./faq.module.css";

// Category ids map to message-catalog keys (data arrays + display label).
const CATEGORY_IDS = ["financing", "delivery", "warranty"];
const CATEGORY_LABEL_KEYS = {
  financing: "categories.Financing",
  delivery: "categories.Delivery",
  warranty: "categories.Warranty",
};

export default function FAQContent() {
  const t = useTranslations("faq");
  const [activeCategory, setActiveCategory] = useState(CATEGORY_IDS[0]);
  const [openIndex, setOpenIndex] = useState(0);

  // Pull localized question/answer arrays from the message catalog.
  const faqData = CATEGORY_IDS.reduce((acc, id) => {
    acc[id] = t.raw(id);
    return acc;
  }, {});

  const questions = faqData[activeCategory];

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CATEGORY_IDS.flatMap((id) => faqData[id]).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="wrapper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      <SiteHeader />

      <section className={styles.faqSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div className={styles.content}>
                <h1 className={styles.heading}>
                  {t("heading")}<br />{t("headingLine2")}
                </h1>
                <p className={styles.subtext}>{t("subtext")}</p>

                <div className={styles.tabs}>
                  {CATEGORY_IDS.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setOpenIndex(0);
                      }}
                      className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ""}`}
                    >
                      {t(CATEGORY_LABEL_KEYS[cat])}
                      <span className={`${styles.tabCount} ${activeCategory === cat ? styles.tabCountActive : ""}`}>
                        {faqData[cat].length}
                      </span>
                    </button>
                  ))}
                </div>

                <div className={styles.categoryLabel}>
                  {t("categoryQuestions", {
                    category: t(CATEGORY_LABEL_KEYS[activeCategory]).toUpperCase(),
                    count: questions.length,
                  })}
                </div>

                <div className={styles.accordion}>
                  {questions.map((item, i) => (
                    <div key={i} className={styles.accordionItem}>
                      <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className={styles.accordionHeader}
                      >
                        <span className={styles.questionText}>{item.question}</span>
                        <div className={`${styles.chevron} ${openIndex === i ? styles.chevronOpen : ""}`}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9l6 6 6-6"/>
                          </svg>
                        </div>
                      </button>
                      {openIndex === i && (
                        <div className={styles.accordionBody}>
                          <p className={styles.answerText}>{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/60127126128?text=${encodeURIComponent("Hi, I have a question about buying a motorcycle")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bottomBtn}
                >
                  <strong>{t("stillQuestions")}</strong>
                  <span className={styles.bottomSubtext}>{t("stillQuestionsSubtext")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <MobileBar />
    </div>
  );
}
