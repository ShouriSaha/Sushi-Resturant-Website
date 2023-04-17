import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Success from '../components/Success'
import Loading from '../components/Loading'
import Error from '../components/Error'

export default function Registerscreen() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confpassword, setconfpassword] = useState('')
    const registerstate = useSelector(state => state.registerUserReducer)
    const { error, loading, success } = registerstate

    const dispatch = useDispatch()
    function register() {
        if (password != confpassword) {
            alert("Passwords didn't match!!")
        }
        else {
            const user = {
                name,
                email,
                password

            }
            console.log(user);
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-5 mt-5 text-end shadow p-3 mb-5 bg-white rounded'>

                    {loading && (<Loading />)}
                    {success && (<Success success="User Registered Successfully." />)}
                    {error && (<Error error="Email Already Registered!!" />)}





                    <h2 className='text-start m-2' style={{ fontSize: '35px' }}>Register</h2>
                    <div>
                        <input type='text' placeholder='name' className='form-control'
                            value={name} required onChange={(e) => { setname(e.target.value) }}
                        />

                        <input type='text' placeholder='email' className='form-control'
                            value={email} required onChange={(e) => { setemail(e.target.value) }} />
                        <input type='text' placeholder='password'
                            className='form-control'
                            value={password} required onChange={(e) => { setpassword(e.target.value) }}
                        />
                        <input type='text' placeholder='re-enter password' className='form-control'
                            value={confpassword} required onChange={(e) => { setconfpassword(e.target.value) }} />
                        <button onClick={register} className='bttn mt-3 rounded mb-3' style={{ fontSize: '18px' }}>REGISTER</button>
                        <br />
                        <a style={{ color: 'black' }} href='/login'>Click Here To Login</a>
                    </div>

                </div>

            </div>
        </div>
    )
}
