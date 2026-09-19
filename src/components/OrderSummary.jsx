const OrderSummary = ({formData}) => {
    const items = [
        {name: "Bound Notebook — Ash A5 - dotted", qty: 2, price: 64},
        {name: "Fountain Pen No. 4 Medium nib", qty: 1, price: 84}
    ]

    const getShippingCost = () => {
        if(formData.shippingMethod === "standard") return 0
        if(formData.shippingMethod === "express") return 12
        if(formData.shippingMethod === "overnight") return 28
        return 0
    }

    const subtotal = 148
    const shippingCost = getShippingCost()
    const total = subtotal + shippingCost

    return(
        <div className="order-summary">
            <h3>ORDER SUMMARY</h3>
            
            {items.map((item, index) =>(
                <div key={index} className="item">
                    <div>
                        <p>{item.name}</p>
                        <p className="qty">qty {item.qty}</p>
                    </div>
                    <p className="price">${item.price}</p>
                </div>
            ))}

            <div className="totals">
                <div className="total-row">
                    <p>Subtotal</p>
                    <p>${subtotal}</p>
                </div>
                <div className="total-row">
                    <p>Shipping</p>
                    <p>{shippingCost === 0 ? 'Free' : `$${shippingCost}`}</p>
                </div>
                <div className="total-row final">
                    <p>Total</p>
                    <p>${total}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary