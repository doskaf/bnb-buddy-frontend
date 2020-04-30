import React, { Component } from 'react';
import { connect } from 'react-redux';
import {deleteBooking} from '../actions/deleteBooking'

class Bookings extends Component {

    handleDelete = (booking) => {
        this.props.deleteBooking(booking.id, booking.listing_id)
    }

    render() {

        let parentListing = this.props.listings.find(listing => listing.id === this.props.listingId)

        return (
            <div>
                <b>Bookings for this Listing:</b>
                {this.props.count}
                <p>the number of bookings is {parentListing.bookings.length}</p>
                {parentListing.bookings.map(booking => 
                    <li key={booking.id}>{booking.guest}: {booking.check_in} {booking.check_out} <button onClick={() => this.handleDelete(booking)}>Delete</button></li>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {

    // set so our props has the array of listings
    return {
        listings: state.listingReducer,
        count: state.BookingCountReducer,
    };
    
}

export default connect(mapStateToProps, {deleteBooking})(Bookings)