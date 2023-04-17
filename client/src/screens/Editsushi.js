import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editSushi, getSushiById } from '../actions/sushiActions';
import { useParams } from 'react-router-dom';
import { editSushiReducer, getSushiByIdReducer } from '../reducers/sushiReducers';
import Loading from '../components/Loading'
import Success from '../components/Success'
import Error from '../components/Error'

export default function Editsushi() {

    const [name, setname] = useState('')
    const [smallprice, setsmallprice] = useState()
    const [mediumprice, setmediumprice] = useState()
    const [largeprice, setlargeprice] = useState()
    const [image, setimage] = useState('')
    const [description, setdescription] = useState('')
    const [category, setcategory] = useState('')

    const getsushibyidstate = useSelector(state => state.getSushiByIdReducer)

    const { sushi, error, loading } = getsushibyidstate

    const editsushistate = useSelector((state) => state.editSushiReducer)
    const { editloading, editerror, editsuccess } = editsushistate


    const dispatch = useDispatch()
    const { sushiid } = useParams();

    useEffect(() => {

        if (sushi) {
            if (sushi._id == sushiid) {
                setname(sushi.name)
                setcategory(sushi.category)
                setdescription(sushi.description)
                setimage(sushi.image)
                setsmallprice(sushi.prices[0]['small'])
                setmediumprice(sushi.prices[0]['medium'])
                setlargeprice(sushi.prices[0]['large'])

            }
            else {
                dispatch(getSushiById(sushiid))

            }

        }
        else {
            dispatch(getSushiById(sushiid))

        }


    }, [sushi, dispatch])

    function formHandler(e) {

        e.preventDefault();

        const editedsushi = {
            _id: sushiid,
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

        dispatch(editSushi(editedsushi))


    }

    return (
        <div>
            <h2 style={{ fontSize: '35px', color: 'purple' }}>Edit Sushi</h2>
            <h1 >Sushi Id = {sushiid}</h1>


            <div className='row justify-content-center'>
                {loading && (<Loading />)}

                {error && (<Error error="Something went wrong!" />)}
                {editsuccess && (<Success success='Sushi details edited succeccfully!!' />)}
                {editloading && (<Loading />)}


                <div className=''>



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

                        <button className='bttn rounded mt-3' type='Submit'>Edit Sushi</button>


                    </form>

                </div>
            </div>

        </div>
    )
}
