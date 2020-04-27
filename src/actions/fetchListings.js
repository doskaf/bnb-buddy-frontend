export function fetchListings() {
    return (dispatch) => {
        fetch('http://localhost:3000/listings')
        .then(response => response.json())
        .then(listings => dispatch({
            type: 'FETCH_LISTINGS',
            payload: listings
        }))
    }
}