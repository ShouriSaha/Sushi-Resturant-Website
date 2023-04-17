import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes, Link, Switch } from "react-router-dom"
import Addsushi from './Addsushi';
import Orderslist from './Orderslist';
import Sushilist from './Sushilist';
import Userslist from './Userslist';

export default function Adminscreen() {

    const userstate = useSelector(state => state.loginUserReducer)
    const { currentUser } = userstate
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'
        }
    }, [])
    return (
        <div>

            <div className='row justify-content-center'>

                <div className='col-md-10'>
                    <h2 style={{ fontSize: '35px', color: 'purple' }}>Admin Panel</h2>



                    <ul className='adminfunc'>
                        <li><a href='/admin/userlist'>Users List</a></li>
                        <li><a href='/admin/sushilist'>Sushis List</a></li>
                        <li><a href='/admin/addsushi' >Add New Sushis</a></li>
                        <li><a href='/admin/oderslist'>Orders List</a></li>



                    </ul>

                    <Routes>

                        <Route exact path='/admin/userlist' element={<Userslist />} />
                        <Route exact path='/admin/sushilist' element={<Sushilist />} />
                        <Route exact path='/admin/addsushi' element={<Addsushi />} />
                        <Route exact path='/admin/oderslist' element={<Orderslist />} />

                    </Routes>





                </div>


            </div>

        </div>

    )
}
