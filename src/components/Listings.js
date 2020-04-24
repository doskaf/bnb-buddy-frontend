import React from 'react';
import Listing from './Listing';

const Listings = (props) => {
    return (
        <div>
            {props.listings.map(listing => <Listing listing={listing} />)}
        </div>
    )
}

export default Listings