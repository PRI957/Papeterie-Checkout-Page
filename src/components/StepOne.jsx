const StepOne = ({formData, setFormData, goNext, errors}) => {    

    const isCurrentStepValid=()=>{
            return(
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
    const handleChange = (e)=>{
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    const handleSubmit = () => {
        if(isCurrentStepValid()){
            goNext()
        }
    }

    return(
    <div className="step-one">
        <h2>Contact & address</h2>
        <p className="step-description">We'll email your receipt and tracking number.</p>
        

        <div className="form-group">
            <label className="form-label">EMAIL ADDRESS</label>
            <input 
                type="email" 
                name="email"
                value={formData.email}
                placeholder="priyachandran2005225@gmail.com"
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-row">
            <div className="form-group">
                <label className="form-label">FIRST NAME</label>
                <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Priyanka"
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">LAST NAME</label>
                <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    placeholder="C"
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
        </div>

        <div className="form-group">
            <label className="form-label">STREET ADDRESS</label>
            <input 
                type="text"
                name="street"
                value={formData.street}
                placeholder="128 New Street"
                onChange={handleChange}
                className={errors.street ? 'error' : ''}
            />
            {errors.street && <span className="error-message">{errors.street}</span>}
        </div>

        <div className="form-row-three">
            <div className="form-group">
                <label className="form-label">CITY</label>
                <input 
                    type="text" 
                    name="city"
                    value={formData.city}
                    placeholder="Melapulam"
                    onChange={handleChange}
                    className={errors.city ? 'error' : ''}
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">STATE</label>
                <input 
                    type="text" 
                    name="state"
                    value={formData.state}
                    placeholder="Oregon"
                    onChange={handleChange}
                    className={errors.state ? 'error' : ''}
                />
                {errors.state && <span className="error-message">{errors.state}</span>}
            </div>

            <div className="form-group">
                <label className="form-label">ZIP</label>
                <input 
                    type="text" 
                    name="zip"
                    value={formData.zip}
                    placeholder="97214"
                    onChange={handleChange}
                    className={errors.zip ? 'error' : ''}
                />
                {errors.zip && <span className="error-message">{errors.zip}</span>}
            </div>
        </div>

        <button 
            type="submit"
            onClick={handleSubmit}
            disabled={!isCurrentStepValid()}
            className="btn-primary"
        >
            Continue to shipping
        </button>
    </div>
)
}

export default StepOne;