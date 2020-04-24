import React from 'react';

const Listing = (props) => {

    let listing = props.listings[props.match.params.id - 1]

    return (
        <div className="listing">
            <h3>{listing ? listing.kind : null}</h3>
            <p>{listing ? listing.bedrooms : null} bed - {listing ? listing.bathrooms : null} bath</p>
            <h4>${listing ? listing.price : null}/night</h4>
        </div>
    )
}

export default Listing