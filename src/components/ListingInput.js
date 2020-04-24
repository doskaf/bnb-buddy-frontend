import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addListing} from '../actions/addListing';

class ListingInput extends Component {
    state = {
        kind: '',
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
            kind: '',
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
                    <select name='kind' value={this.state.kind} onChange={this.handleOnChange}>
                        <option value='Bedroom'>Bedroom</option>
                        <option value='House'>House</option>
                        <option value='Apartment'>Apartment</option>
                        <option value='Mobile Home'>Mobile Home</option>
                    </select>
                    <input type='number' min='0' max='10' placeholder='Bedrooms' name='bedrooms' value={this.state.bedrooms} onChange={this.handleOnChange}/>
                    <input type='number' min='0' max='10' placeholder='Bathrooms' name='bathrooms' value={this.state.bathrooms} onChange={this.handleOnChange}/>
                    <input type='input' placeholder='Location' name='location' value={this.state.location} onChange={this.handleOnChange}/>
                    <input type='number' min='0' max='2000' placeholder='Price per Night' name='price' value={this.state.price} onChange={this.handleOnChange}/>
                    <button type='submit'>Add Listing</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addListing})(ListingInput);