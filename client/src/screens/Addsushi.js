import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-router-dom'
import { addSushi } from '../actions/sushiActions'
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'



export default function Addsushi() {

    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')
    const dispatch = useDispatch()

    const addsushistate = useSelector(state => state.addSushiReducer)
    const { success, error, loading } = addsushistate

    function formHandler(e) {

        e.preventDefault();

        const sushi = {
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice
            }

        }

        console.log(sushi);
        dispatch(addSushi(sushi))

    }

    return (
        <div>

            <div className='row justify-content-center'>

                <div className=''>
                    <h2 style={{ fontSize: '35px', color: 'purple' }}>Add Sushi</h2>

                    {loading && (<Loading />)}
                    {success && (<Success success="User Registered Successfully." />)}
                    {error && (<Error error="Email Already Registered!!" />)}


                    <form className='text-end  p-5' onSubmit={formHandler}>
                        <input className='form-control'
                            type='text'
                            placeholder='name'
                            value={name}
                            onChange={(e) => { setname(e.target.value) }}>
                        </input>

                        <input className='form-control'
                            type='number'
                            placeholder='small varient price'
                            value={smallprice}
                            onChange={(e) => { (setsmallprice(parseInt(e.target.value))) }}>
                        </input>

                        <input className='form-control'
                            type='number'
                            placeholder='medium varient price'
                            value={mediumprice}
                            onChange={(e) => { setmediumprice(parseInt(e.target.value)) }}>
                        </input>

                        <input className='form-control'
                            type='number'
                            placeholder='large varient price'
                            value={largeprice}
                            onChange={(e) => { setlargeprice(parseInt(e.target.value)) }}>
                        </input>

                        <input className='form-control'
                            type='text'
                            placeholder='category'
                            value={category}
                            onChange={(e) => { setcategory(e.target.value) }}>
                        </input>

                        <input className='form-control'
                            type='text'
                            placeholder='description'
                            value={description}
                            onChange={(e) => { setdescription(e.target.value) }}>
                        </input>

                        <input className='form-control'
                            type='text'
                            placeholder='image URL'
                            value={image}
                            onChange={(e) => { setimage(e.target.value) }}>
                        </input>

                        <button className='bttn rounded mt-3' type='Submit'>Add Sushi</button>


                    </form>

                </div>
            </div>
        </div >
    )
}
