const StepIndicator = ({currentStep}) => {
    return(
        <div className="step-indicator">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                {currentStep > 1 ? '✓' : '1'}
            </div>
            <div className="line"></div>

            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                {currentStep > 2 ? '✓' : '2'}
            </div>
            <div className="line"></div>

            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
                {currentStep > 3 ? '✓' : '3'}
            </div>
            <div className="line"></div>
        </div>
    )
}
export default StepIndicator;