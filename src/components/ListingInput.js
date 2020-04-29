import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addListing} from '../actions/addListing';

class ListingInput extends Component {
    state = {
        kind: 'Bedroom',
        bedrooms: '',
        bathrooms: '',
        location: '',
        price: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addListing(this.state)
        this.setState({
            kind: 'Bedroom',
            bedrooms: '',
            bathrooms: '',
            location: '',
            price: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Type of Property: </label><br />
                    <select name='kind' value={this.state.kind} onChange={this.handleOnChange}>
                        <option value='Bedroom'>Bedroom</option>
                        <option value='House'>House</option>
                        <option value='Apartment'>Apartment</option>
                        <option value='Mobile Home'>Mobile Home</option>
                    </select><br />
                    <label>Number of Bedrooms: </label><br />
                    <input type='number' min='0' max='10' name='bedrooms' value={this.state.bedrooms} onChange={this.handleOnChange}/><br />
                    <label>Number of Bathrooms: </label><br />
                    <input type='number' min='0' max='10' name='bathrooms' value={this.state.bathrooms} onChange={this.handleOnChange}/><br />
                    <label>Location: </label><br />
                    <input type='input' name='location' value={this.state.location} onChange={this.handleOnChange}/><br />
                    <label>Price per Night: </label><br />
                    <input type='number' min='0' max='2000' name='price' value={this.state.price} onChange={this.handleOnChange}/><br /><br />
                    <button type='submit'>Add Listing</button>
                </form><br />
            </div>
        )
    }
}

export default connect(null, {addListing})(ListingInput);