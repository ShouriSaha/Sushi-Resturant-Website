import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllSushis } from '../actions/sushiActions'
import Loading from '../components/Loading'
import Sushi from '../components/Sushi'
import Error from '../components/Error'
import Filter from '../components/Filter'

export default function Home() {
    const dispatch = useDispatch()
    const sushisstate = useSelector(state => state.getAllSushisReducer)
    const { sushis, error, loading } = sushisstate
    useEffect(() => {
        dispatch(getAllSushis())

    }, [])

    return (
        <div>
            <Filter />
            <div className='row justify-content-center'>


                {loading ? (
                    <Loading />
                ) : error ? (

                    <Error error="Something went wrong!!" />
                ) : (
                    sushis.map((sushi) => {
                        return (
                            <div className='col-md-3 m-3' key={sushi._id}>
                                <div >
                                    <Sushi sushi={sushi} />
                                </div>

                            </div>
                        );
                    })

                )}
            </div>
        </div>
    )
}
