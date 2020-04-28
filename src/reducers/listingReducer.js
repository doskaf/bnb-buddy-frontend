export default function listingReducer(state = {listings: []}, action) {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return {listings: action.payload}

        case 'ADD_LISTING':
            return {...state, listings: [...state.listings, action.payload]}

        case 'ADD_BOOKING':
            let listings = {...state, listings: state.listings.map(listing => {
                if (listing.id === action.payload.id) {
                    return action.payload
                } else {
                    return listing
                }
            })}
            return {...state, listings: listings}

        case 'DELETE_BOOKING':
            let updatedListings = {...state, listings: state.listings.map(listing => {
                if (listing.id === action.payload.id) {
                    return action.payload
                } else {
                    return listing
                }
            })}
            return {...state, listings: updatedListings}

        default:
            return state
    }
}