import { combineReducers } from 'redux'
//import { legacy_createStore as createStore } from 'redux'
import { createStore, applyMiddleware } from 'redux'

import { cartReducer } from './reducers/cartReducers'

import { registerUserReducer, loginUserReducer, getAllUsersReducer } from './reducers/userReducers'

import thunk from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllSushisReducer, addSushiReducer, getSushiByIdReducer, editSushiReducer } from './reducers/sushiReducers'
import { placeOrderReducer, getUserOrdersReducer, getAllOrdersReducer } from './reducers/orderReducers'

const finalReducer = combineReducers({
    getAllSushisReducer: getAllSushisReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    addSushiReducer: addSushiReducer,
    getSushiByIdReducer: getSushiByIdReducer,
    editSushiReducer: editSushiReducer,
    getAllOrdersReducer: getAllOrdersReducer,
    getAllUsersReducer: getAllUsersReducer
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem("currentUser")) : null
const initalState = {
    cartReducer: {
        cartItems: cartItems

    },

    loginUserReducer: {
        currentUser: currentUser
    }

}
const composeEnhancers = composeWithDevTools({})
const store = createStore(finalReducer, initalState, composeEnhancers(applyMiddleware(thunk)))

export default store