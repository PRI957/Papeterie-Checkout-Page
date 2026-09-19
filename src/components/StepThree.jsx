const StepThree = ({formData, setFormData, goPrevious, errors}) => {

    const isPaymentValid = () => {
        const cardDigitsOnly = formData.cardNumber.replace(/\s/g, "")
        
        return (
            cardDigitsOnly.length === 16 &&
            formData.expiry.length > 0 &&
            formData.cvv.length === 3 &&
            formData.nameOnCard.length > 0
        )
    }

    const calculateTotal = () => {
        const subtotal = 148
        let shippingCost = 0
        
        if(formData.shippingMethod === "standard") shippingCost = 0
        if(formData.shippingMethod === "express") shippingCost = 12
        if(formData.shippingMethod === "overnight") shippingCost = 28
        
        return subtotal + shippingCost
    }

    const getShippingDisplay = () => {
        if(formData.shippingMethod === "standard") return "Standard — Free"
        if(formData.shippingMethod === "express") return "Express — $12"
        if(formData.shippingMethod === "overnight") return "Overnight — $28"
        return "Not selected"
    }

    const getArrivalDate = () => {
        const today = new Date()
        let daysToAdd = 4 
        
        if(formData.shippingMethod === "express") daysToAdd = 2
        if(formData.shippingMethod === "overnight") daysToAdd = 1
        
        const arrivalDate = new Date(today)
        arrivalDate.setDate(arrivalDate.getDate() + daysToAdd)
        
        return arrivalDate.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        if(name === "cardNumber") {
            let formatted = value.replace(/\s/g, "").slice(0, 16)
            formatted = formatted.replace(/(\d{4})/g, "$1 ").trim()
            setFormData({
                ...formData,
                [name]: formatted
            })
            return
        }
        
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handlePayment = () => {
        if(isPaymentValid()) {
            alert("Thank you for your order! Your order is completed.")
        } else {
            alert("Please fill all payment details correctly")
        }
    }

    return(
        <div className="step-three">
            <h2>Payment</h2>
            <p className="step-description">All transactions are encrypted and secure.</p>

            <div className="form-group">
                <label className="form-label">CARD NUMBER</label>
                <input 
                    type="text" 
                    name="cardNumber"
                    value={formData.cardNumber}
                    placeholder="4242 4242 4242 4242"
                    onChange={handleChange}
                    maxLength="19"
                    className={errors.cardNumber ? 'error' : ''}
                />
                {errors.cardNumber && <span className="error-message">{errors.cardNumber}</span>}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label className="form-label">EXPIRY</label>
                    <input 
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        placeholder="09 / 29"
                        onChange={handleChange}
                        maxLength="7"
                        className={errors.expiry ? 'error' : ''}
                    />
                    {errors.expiry && <span className="error-message">{errors.expiry}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">SECURITY CODE</label>
                    <input 
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        placeholder="123"
                        onChange={handleChange}
                        maxLength="3"
                        className={errors.cvv ? 'error' : ''}
                    />
                    {errors.cvv && <span className="error-message">{errors.cvv}</span>}
                </div>
            </div>

            <div className="form-group">
                <label className="form-label">NAME ON CARD</label>
                <input 
                    type="text"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    placeholder="Mara Okonkwo"
                    onChange={handleChange}
                    className={errors.nameOnCard ? 'error' : ''}
                />
                {errors.nameOnCard && <span className="error-message">{errors.nameOnCard}</span>}
            </div>

            <div className="summary-box">
                <h3>SHIP TO</h3>
                <p>{formData.firstName} {formData.lastName}</p>
                <p>{formData.email}</p>
                <p>{formData.street}</p>
                <p>{formData.city}, {formData.state} {formData.zip}</p>
                <hr />
                <h3>METHOD</h3>
                <p>{getShippingDisplay()} — arrives by {getArrivalDate()}</p>
            </div>

            {errors.form && <p className="error-text">{errors.form}</p>}

            <div className="button-group">
                <button 
                    onClick={goPrevious}
                    className="btn-secondary"
                >
                    Back to shipping
                </button>
                <button 
                    type="submit" 
                    onClick={handlePayment}
                    disabled={!isPaymentValid()}
                    className="btn-primary"
                >
                    Place order · ${calculateTotal()}
                </button>
            </div>
        </div>
    )
}

export default StepThree