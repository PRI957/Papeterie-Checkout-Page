import { useState } from "react"
import StepOne from "./StepOne"
import StepTwo from "./StepTwo"
import StepThree from "./StepThree"
import OrderSummary from "./OrderSummary"
import StepIndicator from "./StepIndicator"
import "../styles/checkout.css"

const Checkout = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        shippingMethod: "standard",
        cardNumber: "",
        expiry: "",
        cvv: "",
        nameOnCard: ""
    })
    const [errors, setErrors] = useState({})

    const isCurrentStepValid = () => {
        if(currentStep === 1) {
            return (
                formData.email.length > 0 &&
                formData.email.includes("@") &&
                formData.firstName.length > 0 &&
                formData.lastName.length > 0 &&
                formData.street.length > 0 &&
                formData.city.length > 0 &&
                formData.state.length > 0 &&
                formData.zip.length === 5 &&
                /^\d{5}$/.test(formData.zip) 
            )
        }
        
        if(currentStep === 2) {
            return formData.shippingMethod.length > 0
        }

        if(currentStep === 3) {
            return (
                formData.cardNumber.length > 0 &&
                formData.expiry.length > 0 &&
                formData.cvv.length > 0 &&
                formData.nameOnCard.length > 0
            )
        }
        
        return false
    }

    const goNext = () => {
        if(isCurrentStepValid()) {
            setCurrentStep(currentStep + 1)
            setErrors({})
        } else {
            setErrors({ form: "Please fill all required fields" })
        }
    }

    const goPrevious = () => {
        if(currentStep > 1) {
            setCurrentStep(currentStep - 1)
            setErrors({})
        }
    }

    return (
        <div className="checkout-container">

            <div className="checkout-header">
                <h1>Papeterie</h1>
            </div>
            <StepIndicator currentStep={currentStep} />
            <div className="checkout-content">
                <div className="checkout-form">
                        {currentStep === 1 && (
                    <StepOne 
                        formData={formData}
                        setFormData={setFormData}
                        goNext={goNext}
                        errors={errors}
                    />
                )}

                {currentStep === 2 && (
                    <StepTwo
                        formData={formData}
                        setFormData={setFormData}
                        goNext={goNext}
                        goPrevious={goPrevious}
                        errors={errors}
                    />
                )}

                {currentStep === 3 && (
                    <StepThree
                        formData={formData}
                        setFormData={setFormData}
                        goPrevious={goPrevious}
                        errors={errors}
                    />
                )}
                </div>
                <OrderSummary formData={formData} />
            </div>
        </div>
    )
}

export default Checkout