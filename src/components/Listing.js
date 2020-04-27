import React from 'react';
import {Redirect} from 'react-router-dom';
import BookingsContainer from '../containers/BookingsContainer';

const Listing = (props) => {

    let listing = props.listings[props.match.params.id - 1]
    // let listing = props.listings.filter(listing => listing.id === props.match.params.id)[0]

    return (
        <div className="listing">
            {listing ? null : <Redirect to='/listings' />}
            <h3>{listing ? listing.kind : null}</h3>
            <p>{listing ? listing.bedrooms : null} bed - {listing ? listing.bathrooms : null} bath</p>
            <h4>${listing ? listing.price : null}/night</h4>
            <BookingsContainer listing={listing} />
        </div>
    )
}

export default Listing