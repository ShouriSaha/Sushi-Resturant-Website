export const getAllSushisReducer = (state = { sushis: [] }, action) => {
    switch (action.type) {
        case 'GET_SUSHIS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_SUSHIS_SUCCESS': return {
            loading: false,
            sushis: action.payload
        }
        case 'GET_SUSHIS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state

    }
}

export const getSushiByIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_SUSHIBYID_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_SUSHIBYID_SUCCESS': return {
            loading: false,
            sushi: action.payload
        }
        case 'GET_SUSHIBYID_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state

    }
}

export const addSushiReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_SUSHIS_REQUEST': return {
            loading: true,
            ...state
        }
        case 'ADD_SUSHIS_SUCCESS': return {
            loading: false,
            success: true
        }
        case 'ADD_SUSHIS_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state

    }
}

export const editSushiReducer = (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_SUSHIS_REQUEST': return {
            editloading: true,
            ...state
        }
        case 'EDIT_SUSHIS_SUCCESS': return {
            editloading: false,
            editsuccess: true
        }
        case 'EDIT_SUSHIS_FAILED': return {
            editerror: action.payload,
            editloading: false
        }
        default: return state

    }
}