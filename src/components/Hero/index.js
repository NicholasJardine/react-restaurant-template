import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar.js'
import {HeroContainer, HeroContent, HeroBtn, HeroItems,HeroP,HeroH1} from './HeroElements'


const Hero = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen)
    }
    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
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
