"use client"
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
                { value: '1', label: '1 Year' },
                { value: '2', label: '2 Years' },
                { value: '5', label: '5 Years' },
                { value: '7', label: '7 Years' },
            ]}
        />
    </>
)

const LoanCalculator = ({ motorcycle }) => {
    const [downPayment, setDownPayment] = useState(20)
    const [loanYear, setLoanYear] = useState(1) 
    const [monthlyPayment, setMonthlyPayment] = useState(motorcycle.price ?? 0)
    const debouncedDownPaymentValue = useDebounce(downPayment, 500)

    const getMonthlyPayment = useCallback((deposit, annualInterestRate, loanTermYears) => {
        // Principal loan amount
        const totalCost = motorcycle.price ?? deposit
        const principal = totalCost - deposit
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
    }, [])

    useEffect(() => {
        getMonthlyPayment(debouncedDownPaymentValue, 0.04, loanYear)
    }, [getMonthlyPayment, debouncedDownPaymentValue, loanYear])
    

    return (
        <>
            <h4 className="mb30">Loan Calculator{" "}</h4>
            <p className="first-para mb30">
                Find out if you can afford your dream car using our user friendly car loan calculator.
            </p>
            <IntegerStep title="Downpayment (%)" inputValue={downPayment} onChange={setDownPayment} />
            <SelectLoanPeriod title="Loan Period (Years)" handleChangeSelect={setLoanYear} />
        </>
    )
}

export default LoanCalculator