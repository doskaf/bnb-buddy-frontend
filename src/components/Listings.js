import React from 'react';
import {Link} from 'react-router-dom';

const Listings = (props) => {

    const renderLink = (listing) => {
        if (listing.kind === 'Bedroom') {
            return <Link to={`/listings/${listing.id}`}>Cozy {listing.kind} in {listing.location}</Link>
        } else {
            return <Link to={`/listings/${listing.id}`}>{listing.bedrooms} bedroom {listing.kind} in {listing.location}</Link>
        }
    }

    return (
        <div>
            {props.listings.loading ? <p>Loading Listings...</p> : 
                <ul>
                    {props.listings.map(listing => 
                        <li key={listing.id}>
                            {renderLink(listing)}
                        </li>)}
                </ul>
            }
        </div>
    )
}

export default Listings