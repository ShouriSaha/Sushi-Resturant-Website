import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSushis, deleteSushi } from '../actions/sushiActions'
import Loading from '../components/Loading'
import Sushi from '../components/Sushi'
import Error from '../components/Error'
import Filter from '../components/Filter'
import { Link } from 'react-router-dom'

export default function Sushilist() {

    const dispatch = useDispatch()
    const sushisstate = useSelector(state => state.getAllSushisReducer)
    const { sushis, error, loading } = sushisstate
    useEffect(() => {
        dispatch(getAllSushis())

    }, [])
    return (
        <div>
            <div className='row justify-content-center'>

                <div className='col-md-10'>
                    <h2 style={{ fontSize: '35px', color: 'purple' }}>Sushi List</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error='Something went wrong' />)}

                    <table className='table table-bordered'>
                        <thead className='table-dark'>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {sushis && sushis.map(sushi => {
                                const nam = sushi._id
                                return <tr>
                                    <td>{sushi.name}</td>
                                    <td>

                                        Small : {sushi.prices[0]['small']}<br />
                                        Medium : {sushi.prices[0]['medium']}<br />
                                        Large : {sushi.prices[0]['large']}

                                    </td>
                                    <td>{sushi.category}</td>

                                    <td>
                                        <i className='fa fa-trash m-2' onClick={() => { dispatch(deleteSushi(sushi._id)) }}></i>

                                        <Link to={'/admin/editsushi/' + nam}><i className='fa fa-edit m-1'></i></Link>

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
