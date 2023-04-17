import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StripCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import Success from '../components/Success'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default function Checkout({ subtotal }) {

    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { loading, error, success } = orderstate

    const dispatch = useDispatch()

    function tokenHander(token) {

        console.log(token)
        dispatch(placeOrder(token, subtotal))

    }

    return (
        <div>

            {loading && (<Loading />)}
            {error && (<Error error={'Something went wrong'} />)}
            {success && (<Success success={'Your Order Placed Successfully'} />)}

            <StripCheckout

                amount={subtotal * 100}
                shippingAddress
                token={tokenHander}
                stripeKey='pk_test_51MspAjLot7uULrCE9j22IGBjjxMZ225HuLMsMXUVvET0hDllnKcLHcMyVgI5Y7HpBFhQcEEgL13IHk2RTKLPSjyq008bnFvAf7'
                currency='BDT'


            >
                <button className='bttn rounded'>Pay Now</button>
            </StripCheckout>

        </div>
    )
}
