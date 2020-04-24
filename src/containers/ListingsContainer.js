import React, { Component } from 'react';
import Listings from '../components/Listings';
import ListingInput from '../components/ListingInput';
import { connect } from 'react-redux';
import {fetchListings} from '../actions/fetchListings';
import {Route, Switch} from 'react-router-dom';
import Listing from '../components/Listing';

class ListingsContainer extends Component {

    componentDidMount() {
        this.props.fetchListings()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/listings/new' component={ListingInput}/>
                    <Route path='/listings/:id' render={(routerProps) => <Listing {...routerProps} listings={this.props.listings}/>} />
                    <Route path='/listings' render={(routerProps) => <Listings {...routerProps} listings={this.props.listings} />} />
                </Switch>
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