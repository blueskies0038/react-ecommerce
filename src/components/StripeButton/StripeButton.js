import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51J0rA2CaYZVsM9zLyu9lxoQqpH81uwfbjfV1PRe90Y06OoPVk3O7nDhGHxilLvXsQiKFrtDFRaHxrZOFgQAHhpb200By9Hq2aC"

    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="Tattletale Ltd."
            billingAddress
            shippingAddress
            image=""
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton