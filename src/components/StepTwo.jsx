const StepTwo = ({ formData, setFormData, goNext, goPrevious, errors }) => {

    const handleShippingChange = (e) => {
        setFormData({
            ...formData,
            shippingMethod: e.target.value
        })
    }


    return(
    <div className="step-two">
        <h2>Shipping method</h2>
        <p className="step-description">
            Shipping to {formData.street}, {formData.city}, {formData.state} {formData.zip}
        </p>

        <div className="shipping-options">
            
            <label className="shipping-option">
                <input 
                    type="radio" 
                    name="shippingMethod"
                    value="standard"
                    checked={formData.shippingMethod === "standard"}
                    onChange={handleShippingChange}
                />
                <div className="option-content">
                    <span className="option-title">Standard — 4 to 6 business days</span>
                    <span className="option-price">Free</span>
                </div>
            </label>

            <label className="shipping-option">
                <input 
                    type="radio"
                    name="shippingMethod"
                    value="express"
                    checked={formData.shippingMethod === "express"}
                    onChange={handleShippingChange}
                />
                <div className="option-content">
                    <span className="option-title">Express — 2 business days</span>
                    <span className="option-price">$12</span>
                </div>
            </label>

            <label className="shipping-option">
                <input 
                    type="radio"
                    name="shippingMethod"
                    value="overnight"
                    checked={formData.shippingMethod === "overnight"}
                    onChange={handleShippingChange}
                />
                <div className="option-content">
                    <span className="option-title">Overnight — next business day</span>
                    <span className="option-price">$28</span>
                </div>
            </label>
        </div>

        {errors.form && <p className="error-text">{errors.form}</p>}

        <div className="button-group">
            <button 
                onClick={goPrevious}
                className="btn-secondary"
            >
                Back to address
            </button>
            <button 
                type="submit" 
                onClick={goNext}
                disabled={!formData.shippingMethod}
                className="btn-primary"
            >
                Continue to payment
            </button>
        </div>
    </div>
)
}

export default StepTwo