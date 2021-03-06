import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey=  'pk_test_51HMgmfBLvQGdwszC9szaLihR9WsDJw2deQTsTwDvgmwddZSrlrKv4NK8RW3JsJpmV8BiHQWAGwZDhB4pfe3PorYi00efUNpgTC';

    const onToken = token => {
        console.log(token);
        alert('Payment Successfull')
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description= {`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton;