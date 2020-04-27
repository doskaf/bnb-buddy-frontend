import React, { Component } from 'react';
import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';

class BookingsContainer extends Component {
    render() {
        return (
            <div>
                <BookingInput listing={this.props.listing} />
                <Bookings bookings={this.props.listing && this.props.listing.bookings} />
            </div>
        )
    }
}

export default BookingsContainer