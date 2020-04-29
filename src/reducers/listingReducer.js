export default function listingReducer(state = [], action) {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return action.payload

        case 'ADD_LISTING':
            return [...state, action.payload]

        case 'ADD_BOOKING':
            let parentListing = state.find(listing => listing.id === action.payload.listing_id);
            // add booking to this listing
            parentListing.bookings.push(action.payload)

            //let index = state.indexOf(parentListing);
            return state;

            /*
        case 'DELETE_BOOKING':
            let updatedListings = {...state, listings: state.listings.map(listing => {
                if (listing.id === action.payload.id) {
                    return action.payload
                } else {
                    return listing
                }
            })}
            return {...state, listings: updatedListings}
*/
        default:
            return state
    }
}