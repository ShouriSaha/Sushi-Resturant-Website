import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Success from '../components/Success'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { neworder } from '../'


export default function Ordersscreen() {

    const dispatch = useDispatch()
    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders, error, loading } = orderstate

    useEffect(() => {

        dispatch(getUserOrders())
    }, [])





    return (
        <div>
            <h2 style={{ fontSize: '35px', color: 'purple' }}>Orders List</h2>
            <hr />
            <div className='row justify-content-center' >
                {loading && (<Loading />)}
                {error && (<Error error={'Something went wrong'} />)}
                {orders && orders.map(order => {
                    return <div className='col-md-8 rounded m-2 ' style={{ backgroundColor: 'pink' }}>

                        <div className='flex-container'>
                            <div className='text-start w-100 m-1'>
                                <h2 style={{ fontSize: '23px' }}>Items</h2>
                                <hr />
                                {order.orderItems.map(item => {
                                    return <div>
                                        <p>{item.name}[{item.varient}]*{item.quantity}={item.price}</p>
                                    </div>
                                })}

                            </div>

                            <div className='text-start w-100 m-1'>
                                <h2 style={{ fontSize: '23px' }}>Address</h2>
                                <hr />
                                <p>Street: {order.shippingAddress.street}</p>
                                <p>City: {order.shippingAddress.city}</p>
                                <p>Country: {order.shippingAddress.country}</p>
                                <p>Postal code: {order.shippingAddress.postalcode}</p>



                            </div>

                            <div className='text-start w-100 m-1'>
                                <h2 style={{ fontSize: '23px' }}>Order Info</h2>
                                <hr />
                                <p>Order Amount: {order.orderAmount}</p>
                                <p>Date : {order.createdAt.substring(0 - 10)}</p>
                                <p>Transaction Id : {order.transactionId}</p>
                                <p>Order Id : {order._id}</p>

                            </div>
                        </div>


                    </div>
                })}

            </div>
        </div>
    )
}
