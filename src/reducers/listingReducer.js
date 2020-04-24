export default function listingReducer(state = {listings: []}, action) {
    switch (action.type) {
        case 'FETCH_LISTINGS':
            return {listings: action.payload}

        default:
            return state
    }
}