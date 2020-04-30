export default function listingReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return action.payload

        case 'ADD_LISTING':
            return [...state, action.payload]

        case 'ADD_BOOKING':
            let parentListing = state.find(listing => listing.id === action.payload.listing_id);
            parentListing.bookings.push(action.payload)
            return state;

        case 'DELETE_BOOKING':
            let listing = state.find(listing => listing.id === action.payload.listing_id);
            listing.bookings = listing.bookings.map(booking => booking.id !== action.payload.id);
            return state

        default:
            return state
    }
}