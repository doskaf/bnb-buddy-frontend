export default function listingReducer(state = {listings: []}, action) {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return {listings: action.payload}

        case 'ADD_LISTING':
            return {...state, listings: [...state.listings, action.payload]}

        default:
            return state
    }
}