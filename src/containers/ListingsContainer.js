import React, { Component } from 'react';
import Listings from '../components/Listings';
import ListingInput from '../components/ListingInput';
import { connect } from 'react-redux';
import {fetchListings} from '../actions/fetchListings';

class ListingsContainer extends Component {

    componentDidMount() {
        this.props.fetchListings()
    }

    render() {
        return (
            <div>
                <ListingInput />
                <Listings listings={this.props.listings} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

export default connect(mapStateToProps, {fetchListings})(ListingsContainer);