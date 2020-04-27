import React from 'react';

const Bookings = (props) => {
    return (
        <div>
            {props.bookings && props.bookings.map(booking => 
                <li key={booking.id}>{booking.guest}: {booking.check_in} {booking.check_out} </li>)}
        </div>
    )
}

export default Bookings