export function addListing(data) {
    return (dispatch) => {
        fetch('http://localhost:3000/listings', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(listing => dispatch({type: 'ADD_LISTING', payload: listing}))
    }
}