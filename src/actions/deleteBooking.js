export function deleteBooking(bookingId, listingId) {
    return (dispatch) => {
        fetch(`http://localhost:3000/listings/${listingId}/bookings/${bookingId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(listing => dispatch({type: 'DELETE_BOOKING', payload: listing}))
    }
}