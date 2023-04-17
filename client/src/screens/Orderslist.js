import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllOrders, deliverOrder } from '../actions/orderActions'
import Loading from '../components/Loading'
import Error from '../components/Error'


export default function Orderslist() {

    const dispatch = useDispatch()
    const getordersstate = useSelector(state => state.getAllOrdersReducer)
    const { loading, error, orders } = getordersstate
    useEffect(() => {
        dispatch(getAllOrders())
    }, [])
    return (
        <div>
            <div className='row justify-content-center'>

                <div className='col-md-10'>
                    <h2 style={{ fontSize: '35px', color: 'purple' }}>Order List</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error='Something went wrong' />)}
                    <table className='table table-striped table-bordered'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Order ID</th>
                                <th>Email</th>
                                <th>User ID</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>

                        </thead>
                        <tbody>
                            {orders && orders.map(order => {
                                return <tr>
                                    <td>{order._id}</td>
                                    <td>{order.email}</td>
                                    <td>{order.userid}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.createdAt.substring(0, 10)}</td>
                                    <td>
                                        {order.isDelivered ? (<h1>Delivered</h1>) :
                                            (<button className='bttn rounded' onClick={deliverOrder(order._id)}>Deliver</button>)}
                                    </td>
                                </tr>
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    )
}
