"use client";
import styles from "./LoanCalculator.module.css";
import { useCallback, useState, useEffect } from "react";
import { message } from "antd";

const LOAN_TERMS = [
  { value: 2, label: "24m" },
  { value: 3, label: "36m" },
  { value: 4, label: "48m" },
  { value: 5, label: "60m" },
];

const LoanCalculator = ({ motorcycle }) => {
  const { price: numericPrice } = motorcycle;
  const priceFloat = parseFloat(numericPrice);

  const [downPaymentPercent, setDownPaymentPercent] = useState(10);
  const [loanYear, setLoanYear] = useState(5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const downPaymentAmount = Math.round((priceFloat * downPaymentPercent) / 100);

  const getMonthlyPayment = useCallback(
    (downPaymentPct, annualInterestRate, loanTermYears) => {
      const principal = (priceFloat * (100 - downPaymentPct)) / 100;
      const monthlyInterestRate = annualInterestRate / 12 / 100;
      const totalPayments = loanTermYears * 12;

      if (annualInterestRate === 0) {
        return principal / totalPayments;
      }

      const payment =
        (principal *
          (monthlyInterestRate *
            Math.pow(1 + monthlyInterestRate, totalPayments))) /
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
      setMonthlyPayment(payment);
    },
    [priceFloat]
  );

  useEffect(() => {
    getMonthlyPayment(downPaymentPercent, 3.5, loanYear);
  }, [getMonthlyPayment, downPaymentPercent, loanYear]);

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorMain}>
        <h4 className={styles.title}>Financing Calculator</h4>
        <p className={styles.subtitle}>
          Own your dream ride with flexible monthly installments tailored to your
          budget.
        </p>

        <div className={styles.sliderSection}>
          <div className={styles.sliderHeader}>
            <span className={styles.sliderLabel}>
              Down Payment ({downPaymentPercent}%)
            </span>
            <span className={styles.sliderValue}>
              RM {downPaymentAmount.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className={styles.slider}
          />
        </div>

        <div className={styles.termSection}>
          <div className={styles.termHeader}>
            <span className={styles.termLabel}>Loan Term</span>
            <span className={styles.termValue}>
              {loanYear * 12} Months
            </span>
          </div>
          <div className={styles.termButtons}>
            {LOAN_TERMS.map((term) => (
              <button
                key={term.value}
                type="button"
                className={`${styles.termButton} ${
                  loanYear === term.value ? styles.termButtonActive : ""
                }`}
                onClick={() => setLoanYear(term.value)}
              >
                {term.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.resultPanel}>
        <div className={styles.resultContent}>
          <span className={styles.resultLabel}>ESTIMATED MONTHLY</span>
          <div className={styles.resultAmount}>
            <span className={styles.rmPrefix}>RM</span>
            <span className={styles.amountValue}>
              {Math.round(monthlyPayment).toLocaleString()}
            </span>
            <span className={styles.amountSuffix}>/mo</span>
          </div>
          <p className={styles.resultDisclaimer}>
            Calculated at 3.5% interest rate. Final amount may vary based on
            credit profile and insurance.
          </p>
        </div>

        <button
          type="button"
          className={styles.applyButton}
          onClick={() => {
            const whatsappMessage = `Hi! I'm interested in applying for a motorcycle loan for the ${
              motorcycle.brand
            } ${motorcycle.model} (RM ${motorcycle.price}).

Loan Details:
- Down Payment: ${downPaymentPercent}% (RM ${downPaymentAmount.toLocaleString()})
- Loan Period: ${loanYear} years
- Estimated Monthly Payment: RM ${Math.round(monthlyPayment)}

Could you help me with the loan application process?`;

            const encodedMessage = encodeURIComponent(whatsappMessage);
            const whatsappUrl = `https://wa.me/60127126128?text=${encodedMessage}`;
            window.open(whatsappUrl, "_blank");
            message.success("Redirecting to WhatsApp for loan application...");
          }}
        >
          Apply for Loan
        </button>
      </div>
    </div>
  );
};

export default LoanCalculator;
