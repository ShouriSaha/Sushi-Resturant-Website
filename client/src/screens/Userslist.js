import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../components/Loading'
import Error from '../components/Error'
import { deleteUser, getAllUsers } from '../actions/userActions'
export default function Userslist() {

    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUsersReducer)
    const { loading, error, users } = usersstate

    useEffect(() => {

        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            <div className='row justify-content-center'>

                <div className='col-md-10'>
                    <h2 style={{ fontSize: '35px', color: 'purple' }}>User List</h2>
                    {loading && (<Loading />)}
                    {error && (<Error error='Something went wrong' />)}
                    <table className='table table-striped table-bordered'>
                        <thead className='table-dark'>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>

                        </thead>
                        <tbody>
                            {users && users.map(user => {
                                return <tr>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><i className='fa fa-trash' onClick={() => { dispatch(deleteUser(user._id)) }}></i></td>

                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
