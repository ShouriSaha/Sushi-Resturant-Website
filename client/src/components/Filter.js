import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterSushis } from '../actions/sushiActions';
export default function Filter() {
    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState("");
    const [category, setcategory] = useState('all')
    return (
        <div className='container'>
            <div className='row justify-content-center shadow p-3 mb-5 bg-white rounded'>

                <div className='col-md-3'>
                    <input
                        onChange={(e) => { setsearchkey(e.target.value) }}
                        value={searchkey} type='text' className='form-control' placeholder='search' />

                </div>
                <div className='col-md-3 '>
                    <select className='form-control mt-3' value={category} onChange={(e) => setcategory(e.target.value)}>
                        <option value='all'>All</option>
                        <option value='main course'>Main course</option>
                        <option value='drinks'>Drinks</option>
                    </select>


                </div>
                <div className='col-md-3'>
                    <button className='btn rounded mt-3 w-100' onClick={() => { dispatch(filterSushis(searchkey, category)) }}>FILTER</button>

                </div>

            </div>
        </div>
    )
}
