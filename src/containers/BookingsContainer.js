import React, { Component } from 'react';
import BookingInput from '../components/BookingInput';
import Bookings from '../components/Bookings';

class BookingsContainer extends Component {
    render() {
        
        return (
            <div>
                <BookingInput listing={this.props.listing} /><br />
                {this.props.listing != null && <Bookings listing={this.props.listing} />}
            </div>
        )
    }
}

export default BookingsContainer