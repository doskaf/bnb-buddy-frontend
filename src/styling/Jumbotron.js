import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import house from '../assets/house.jpeg';

const Styles = styled.div`
    .jumbo {
        background: url(${house}) no-repeat fixed bottom;
        background-size: cover;
        color #ccc;
        height 200px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h3>BnB Buddy</h3>
                    <p>Your new BnB best friend</p>
                </Container>
            </Jumbo>
        </Styles>
    )
}