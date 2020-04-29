import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #5393e0;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: white;

        &:hover {
            color: #2a60a1;
        }
    }
`;

export const NavigationBar = () => {
    return (
        <Styles>
            <Navbar expand="lg">
                <Navbar.Brand href='/'>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/listings">View Listings</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/listings/new">Create New Listing</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Styles>
    )
}

