import React, { Component } from 'react';
import Listings from '../components/Listings';
import ListingInput from '../components/ListingInput';
import { connect } from 'react-redux';
import {fetchListings} from '../actions/fetchListings';
import {Route, Switch} from 'react-router-dom';
import Listing from '../components/Listing';
import {Home} from '../styling/Home';
import {NotFound} from '../styling/NotFound';

class ListingsContainer extends Component {

    componentDidMount() {
        this.props.fetchListings()
    }
    
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/listings/new' component={ListingInput}/>
                    <Route path='/listings/:id' render={(routerProps) => <Listing {...routerProps} listings={this.props.listings}/>} />
                    <Route path='/listings' render={(routerProps) => <Listings {...routerProps} listings={this.props.listings} />} />
                    <Route component={NotFound} />
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