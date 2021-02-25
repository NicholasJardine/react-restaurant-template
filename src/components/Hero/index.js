import React from 'react'
import Navbar from '../Navbar'
import {HeroContainer, HeroContent, HeroBtn, HeroItems,HeroP,HeroH1} from './HeroElements'


const Hero = () => {
    return (
        <HeroContainer>
            <Navbar/>
            <HeroContent>
                <HeroItems>
                <HeroH1>The City's Finest Burgers</HeroH1>
                    <HeroP>Delivered in 45 minutes</HeroP>
                    <HeroBtn><p>Place Order</p></HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
