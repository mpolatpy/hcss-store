import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IBrmjHDP2n5OmIZZUwBXWzCXh1CYr3H6mtek6uCdkTzDh1EVVpFeKmPEwxpTKDEEQpByFxhLWBc6p7DzQP1Ivfz00CP2E6u0o';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then((response) => {
            alert('Payment successfull');
        })
        .catch((err) => {
            console.log('Payment error', JSON.parse(err));
            alert('There was an issue with your payment. Please use the provided credit card')
        });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;