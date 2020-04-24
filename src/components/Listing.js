import React, { Component } from 'react';

class Listing extends Component {

    render() {
        return (
            <div className="listing">
                <h3>{this.props.listing.kind}</h3>
                <p>{this.props.listing.bedrooms} bed - {this.props.listing.bathrooms} bath</p>
                <h4>${this.props.listing.price}/night</h4>
            </div>
        )
    }
}

export default Listing