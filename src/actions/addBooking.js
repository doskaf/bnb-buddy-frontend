export function addBooking(booking, listingId) {
    return (dispatch) => {
        fetch(`http://localhost:3000/listings/${listingId}/bookings`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(booking)
        })
        .then(response => response.json())
        .then(booking => {
            if (booking.error) {
                alert(booking.error)
            } else {
                dispatch({type: 'ADD_BOOKING', payload: booking})
            }
        })
    }
}