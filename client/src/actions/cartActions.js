export const addToCart = (sushi, quantity, varient) => (dispatch, getstate) => {

    var cartItem = {
        name: sushi.name,
        _id: sushi._id,
        image: sushi.image,
        varient: varient,
        quantity: quantity,
        prices: sushi.prices,
        price: sushi.prices[0][varient] * quantity
    }

    if (cartItem.quantity > 10) {
        alert('You cannot add more than 10 elements!!!')
    }

    else {

        if (cartItem.quantity < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: sushi })
        }

        else {

            dispatch({ type: 'ADD_TO_CART', payload: cartItem })

        }

    }

    const cartItems = getstate().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const deleteFromCart = (sushi) => (dispatch, getstate) => {

    dispatch({ type: 'DELETE_FROM_CART', payload: sushi })
    const cartItems = getstate().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
}