import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';


export default function Sushi({ sushi }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart() {
        dispatch(addToCart(sushi, quantity, varient))

    }
    return (
        <div className='shadow p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
                <h1>{sushi.name}</h1>
                <img src={sushi.image} className='img-fluid' style={{ height: '200px', width: '200px' }} />
            </div>

            <div className='flex-container'>
                <div className='w-100 m-1'>
                    <p>varients</p>
                    <select className='form-control' value={varient} onChange={(a) => { setvarient(a.target.value) }}>
                        {sushi.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>

                </div>

                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(a) => { setquantity(a.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>

                </div>

            </div>
            <div className='flex-container'>
                <div className='m-1 w-100'>
                    <h1 className='m-1'>Price : {sushi.prices[0][varient] * quantity} Tk/=</h1>

                </div>

                <div className='m-1 w-100'>
                    <button className='bttn m-1 w-90 h-80 rounded' onClick={addtocart}>Add To Cart</button>

                </div>

            </div>

            <Modal show={show}>
                <Modal.Header >
                    <Modal.Title>{sushi.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={sushi.image} className='img-fluid' style={{ height: '300px', width: '400px' }} />
                    <p>{sushi.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='bttn w-100 rounded' onClick={handleClose}>Close</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
