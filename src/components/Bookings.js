import React from 'react';
import { connect } from 'react-redux';
import {deleteBooking} from '../actions/deleteBooking'

const Bookings = (props) => {

    const handleDelete = (booking) => {
        props.deleteBooking(booking.id, booking.listing_id)
    }


    return (
        <div>
            <b>Bookings for this Listing:</b>
            {props.listing.bookings.map(booking => 
                <li key={booking.id}>{booking.guest}: {booking.check_in} {booking.check_out} <button onClick={() => handleDelete(booking)}>Delete</button></li>)}
        </div>
    )
}

export default connect(null, {deleteBooking})(Bookings)