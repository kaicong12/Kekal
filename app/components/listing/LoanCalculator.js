"use client"
import styles from './LoanCalculator.module.css'
import { useDebounce } from "@/utils/hooks/useDebounce"
import { useCallback, useState, useEffect } from "react"
import { Col, InputNumber, Row, Slider, Select } from 'antd';


const IntegerStep = ({ title, inputValue, onChange }) => {
    return (
        <>  
            <Row style={{alignItems: "center", justifyContent: "space-between"}}>
                <strong>{title}</strong>
                <Col span={7} style={{float: "right"}}>
                    <InputNumber
                        min={1}
                        max={100}
                        style={{
                            marginLeft: '16px',
                            float: 'right'
                        }}
                        value={inputValue}
                        onChange={onChange}
                    />
                </Col>
            </Row>
            <Row className="mb20">
                <Col span={24}>
                    <Slider
                        min={1}
                        max={100}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
            </Row>
        </>
    )
}

const SelectLoanPeriod = ({ title, handleChangeSelect }) => (
    <>
        <div className="mb20" style={{fontWeight: '600'}}>{title}</div>
        <Select
            defaultValue="2"
            style={{ width: "100%" }}
            onChange={handleChangeSelect}
            options={[
                { value: "1", label: '1 Year' },
                { value: "2", label: '2 Years' },
                { value: "5", label: '5 Years' },
                { value: "7", label: '7 Years' },
            ]}
        />
    </>
)

const LoanCalculator = ({ motorcycle }) => {
    const { price: numericPrice } = motorcycle;
    const priceFloat = parseFloat(numericPrice);

    const [downPayment, setDownPayment] = useState(20)
    const [loanYear, setLoanYear] = useState(2) 
    const [monthlyPayment, setMonthlyPayment] = useState(priceFloat ?? 0)
    const debouncedDownPaymentValue = useDebounce(downPayment, 500)

    const getMonthlyPayment = useCallback((downPaymentPercent, annualInterestRate, loanTermYears) => {
        // Principal loan amount
        const principal = priceFloat * (100 - downPaymentPercent) / 100
        // Convert annual rate to a monthly and percentage rate
        const monthlyInterestRate = annualInterestRate / 12 / 100
        // Total number of monthly payments
        const totalPayments = loanTermYears * 12

        // Check for zero interest rate
        if (annualInterestRate === 0) {
            return principal / totalPayments;
        }
        
        const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) / (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
        setMonthlyPayment(monthlyPayment)
    }, [priceFloat])

    useEffect(() => {
        getMonthlyPayment(debouncedDownPaymentValue, 4, loanYear)
    }, [getMonthlyPayment, debouncedDownPaymentValue, loanYear])
    

    return (
        <>
            <h4 className="mb30">Loan Calculator{" "}</h4>
            <p className="first-para mb30">
                Find out if you can afford your dream car using our user friendly car loan calculator.
            </p>
            <IntegerStep title="Downpayment (%)" inputValue={downPayment} onChange={setDownPayment} />
            <SelectLoanPeriod title="Loan Period (Years)" handleChangeSelect={setLoanYear} />

            <div className={styles.displayContainer}>
                <div className={styles.displayDiv}>
                    <strong style={{display: 'block', fontSize: '20px'}}>RM {priceFloat * downPayment / 100}</strong>
                    <span style={{ fontSize: '13px'}}>Down Payment</span>
                </div>

                <div className={styles.displayDiv}>
                    <strong style={{display: 'block', fontSize: '20px', marginTop: '20px'}}>RM{Math.round(monthlyPayment * 100)/100}</strong>
                    <span style={{ fontSize: '13px'}}>Monthly Repayment</span>
                </div>

                <button type="submit" className={`btn btn-block btn-thm mt30 mb20 ${styles.loanEnquiryButton}`}>
                    Apply Loan
                </button>
            </div>
        </>
    )
}

export default LoanCalculator