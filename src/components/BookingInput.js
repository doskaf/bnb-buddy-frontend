import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addBooking} from '../actions/addBooking';

class BookingInput extends Component {
    state = {
        guest: '',
        checkIn: '',
        checkOut: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addBooking({
            guest: this.state.guest,
            check_in: this.state.checkIn,
            check_out: this.state.checkOut
        }, this.props.listing.id);
        this.setState({
            guest: '',
            check_in: '',
            check_out: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Book this Listing</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Guest Name:</label>
                    <input type='text' name='guest' value={this.state.guest} onChange={this.handleOnChange} /><br />
                    <label>Check-In Date:</label>
                    <input type='text' name='checkIn' value={this.state.checkIn} placeholder='MM/DD/YY' onChange={this.handleOnChange} /><br />
                    <label>Check-Out Date:</label>
                    <input type='text' name='checkOut' value={this.state.checkOut} placeholder='MM/DD/YY' onChange={this.handleOnChange} /><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addBooking})(BookingInput)