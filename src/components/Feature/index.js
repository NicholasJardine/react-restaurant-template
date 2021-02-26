import React from 'react'
import styled from 'styled-components'
import { FeatureButton} from './FeatureElements'
import FreaturePic from '../../images/burger1.jpg'

const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.1)), url(${FreaturePic});
    height:100vh;
    max-height:500px;
    background-position:center;
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color: #fff;
    text-align:center;
    padding: 0 1rem;

    h1{
        font-size: clamp(3rem, 5vw,5rem);
    }

    p{
        margin-bottom:1rem;
        font-size: clamp(1rem, 5vw, 2rem);
    }
`
const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Burger of the Day</h1>
            <p>Mega Chilli Cheese burger with double patty.</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>
    )
}

export default Feature
