"use client";
import { useState } from "react";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import Footer from "@/app/components/common/Footer";
import StickyHomeCTA from "@/app/components/common/StickyHomeCTA";
import styles from "./faq.module.css";

const FAQ_DATA = {
  Financing: [
    {
      question: "Can first-time buyers get a bike loan?",
      answer:
        "Yes. We work with MBSB, Hong Leong, and RHB — all of which finance first-time buyers from RM 1,800 monthly income. Approval is usually 1–2 working days. Use our 60-second pre-qualifier first to see your odds before you commit.",
    },
    {
      question: "What documents do I need?",
      answer:
        "You'll need your IC (MyKad), latest 3 months' pay slips or EPF statement, and bank statements for the past 3 months. Self-employed buyers need SSM registration and 6 months' bank statements.",
    },
    {
      question: "Can I get a discount for paying full cash?",
      answer:
        "Yes — cash buyers get a direct discount off the listed price. The exact amount depends on the model. WhatsApp us with the bike you want and we'll quote you immediately.",
    },
    {
      question: "What's the lowest down-payment I can put?",
      answer:
        "Most banks accept as low as 10% down-payment for salaried buyers. Some models qualify for zero down-payment promotions — ask us which ones are currently running.",
    },
  ],
  Delivery: [
    {
      question: "How long does delivery take?",
      answer:
        "In-stock bikes are ready same day or next day. If we need to source from another branch, allow 3–5 working days. We'll update you at every step via WhatsApp.",
    },
    {
      question: "Do you deliver outside JB?",
      answer:
        "Yes, we deliver across Johor and Peninsular Malaysia. Delivery within JB is free. For outstation delivery, a transport fee applies depending on distance — usually RM 100–300.",
    },
    {
      question: "Can I test ride before buying?",
      answer:
        "Absolutely. Visit our showroom at Jalan Seroja 49, Taman Johor Jaya during opening hours. Bring your license and we'll set up a test ride on the spot.",
    },
  ],
  Warranty: [
    {
      question: "What warranty do I get?",
      answer:
        "All new bikes come with manufacturer warranty (typically 2 years or 20,000 km, whichever comes first). We also provide our own 6-month dealer warranty on top covering electrical and engine components.",
    },
    {
      question: "What does the warranty cover?",
      answer:
        "Manufacturer warranty covers manufacturing defects in engine, frame, and electrical systems. Our dealer warranty covers major components excluding wear parts (brake pads, tyres, chain, sprocket).",
    },
    {
      question: "Can I extend my warranty?",
      answer:
        "Yes — we offer extended warranty packages for an additional 1 or 2 years. Ask at the point of purchase for the best rate. It's cheaper to add it upfront than later.",
    },
  ],
};

const CATEGORIES = Object.keys(FAQ_DATA);

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [openIndex, setOpenIndex] = useState(0);

  const questions = FAQ_DATA[activeCategory];

  return (
    <div className="wrapper">
      <HeaderTop />
      <DefaultHeader />
      <MobileMenu />

      <section className={styles.faqSection}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-7">
              <div className={styles.content}>
                <h1 className={styles.heading}>
                  First-time buyer?<br />Start here.
                </h1>
                <p className={styles.subtext}>
                  We get these questions every day. If we miss one,
                  WhatsApp us — Faiz answers in ~5 min.
                </p>

                <div className={styles.tabs}>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setOpenIndex(0);
                      }}
                      className={`${styles.tab} ${activeCategory === cat ? styles.tabActive : ""}`}
                    >
                      {cat}
                      <span className={`${styles.tabCount} ${activeCategory === cat ? styles.tabCountActive : ""}`}>
                        {FAQ_DATA[cat].length}
                      </span>
                    </button>
                  ))}
                </div>

                <div className={styles.categoryLabel}>
                  {activeCategory.toUpperCase()} · {questions.length} QUESTIONS
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
                  <strong>Still got questions?</strong>
                  <span className={styles.bottomSubtext}>Faiz from sales replies in ~5 min during business hours (9–7 daily)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky CTA */}
      <StickyHomeCTA />
    </div>
  );
}
