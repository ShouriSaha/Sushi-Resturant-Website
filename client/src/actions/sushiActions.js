import axios from 'axios';
import { Await } from 'react-router-dom';
export const getAllSushis = () => async dispatch => {
    dispatch({ type: 'GET_SUSHIS_REQUEST' })

    try {
        const response = await axios.get('/api/sushis/getallsushis')
        console.log(response);
        dispatch({ type: 'GET_SUSHIS_SUCCESS', payload: response.data })

    } catch (error) {
        dispatch({ type: 'GET_SUSHIS_FAILED', payload: error })

    }

}

export const getSushiById = (sushiid) => async dispatch => {
    dispatch({ type: 'GET_SUSHIBYID_REQUEST' })

    try {
        const response = await axios.post('/api/sushis/getsushibyid', { sushiid })
        console.log(response);
        dispatch({ type: 'GET_SUSHIBYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_SUSHIBYID_FAILED', payload: error })

    }

}

export const filterSushis = (searchkey, category) => async dispatch => {

    var filteredSushis;
    dispatch({ type: 'GET_SUSHIS_REQUEST' })

    try {
        const response = await axios.get('/api/sushis/getallsushis')
        filteredSushis = response.data.filter(sushi => sushi.name.toLowerCase().includes(searchkey))

        if (category != 'all') {
            filteredSushis = response.data.filter(sushi => sushi.category.toLowerCase() == category)
        }
        dispatch({ type: 'GET_SUSHIS_SUCCESS', payload: filteredSushis })
    } catch (error) {
        dispatch({ type: 'GET_SUSHIS_FAILED', payload: error })

    }

}


export const addSushi = (sushi) => async dispatch => {
    dispatch({ type: 'ADD_SUSHI_REQUEST' })
    try {
        const response = await axios.post('/api/sushis/addsushi', { sushi })
        console.log(response);
        dispatch({ type: 'ADD_SUSHI_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'ADD_SUSHI_FAILED', payload: error })

    }
}

export const editSushi = (editedsushi) => async dispatch => {
    dispatch({ type: 'EDIT_SUSHI_REQUEST' })
    try {
        const response = await axios.post('/api/sushis/editsushi', { editedsushi })
        console.log(response);
        dispatch({ type: 'EDIT_SUSHI_SUCCESS' })
        window.location.href = '/admin/sushilist'
    } catch (error) {
        dispatch({ type: 'EDIT_SUSHI_FAILED', payload: error })

    }
}

export const deleteSushi = (sushiid) => async dispatch => {

    try {
        const response = await axios.post('/api/sushis/deletesushi', { sushiid })
        alert("Sushi Deleted Successfully!!")
        console.log(response);
        window.location.reload()

    } catch (error) {
        alert('Something went wrong')
        console.log(error)
    }
}