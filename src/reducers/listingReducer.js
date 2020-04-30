export default function listingReducer(state = {listings: []}, action) {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return {...state, listings: action.payload}

        case 'ADD_LISTING':
            return {...state, listings: [...state.listings, action.payload]}

        case 'ADD_BOOKING':

            let index = state.listings.findIndex(listing => listing.id === action.payload.listing_id);
            return {...state, 
                listings: [...state.listings.slice(0, index), {
                ...state.listings[index], bookings: [...state.listings[index].bookings, action.payload]
            }, ...state.listings.slice(index + 1)]}


        case 'DELETE_BOOKING':
            let i = state.listings.findIndex(listing => listing.id === action.payload.listing_id);
            return {...state, listings: [...state.listings.slice(0, i), {
                ...state.listings[i], bookings: state.listings[i].bookings.filter(booking => booking.id !== action.payload.id)
            }, ...state.listings.slice(i + 1)]}

        default:
            return state
    }
}