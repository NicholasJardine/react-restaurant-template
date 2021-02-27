import React from 'react'
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin,FaYoutube} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

    export const FooterContainer = styled.footer`
    background-color: #000;
    `

    export const FooterWrap = styled.div`
        padding: 24px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        max-width: 1100px;
        margin:0 auto;
    `

    export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;



    @media screen and (max-width:820px) {
       padding-top:32px; 
    }
    `
    export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width:820px) {
        flex-direction: column;
    }
    `
    export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin:16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width:420px) {
        margin: 0;
        padding: 10px;
        width:100%;
    }
    `
    export const FooterLinkTitle = styled.h1`
        font-size:14px;
        margin-bottom:16px;
    `
    export const FooterLink = styled(Link)`
    font-size:14px;
    margin-bottom:0.5rem;
    color: #fff;
    text-decoration:none;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out
    }
    `

    export const SocialMedia = styled.section`
        max-width:1000px;
        width:100%;
    `

    export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    max-width:1100px;
    margin:40px auto 0 auto;



    @media screen and (max-width:820px) {
        flex-direction:column;
    }
    `
    export const SocialLogo = styled(Link)`
        color:#fff;
        justify-self:start;
        cursor:pointer;
        text-decoration:none;
        font-size:1.5rem;
        display:flex;
        align-items:center;
        margin-bottom:16px;
        font-weight:bold;
    `

    export const FooterMotto = styled.h1`
        margin-top:56px;
        color: #fff;
        margin-left:-80px;
        @media screen and (max-width:768px) {
            text-align:center;
            margin:auto;
        }
    `

    export const WebsiteRights = styled.small`
    color:#fff;
    margin-bottom:16px;

    `
    export const SocialIcons = styled.div`
    display:flex;
    justify-content: space-between; 
    align-items:center;
    width:240px;  
    `

    export const SocialIconLink = styled.a`
    color:#fff;
    font-size:24px;
    `

    const Footer = () => {

        const toggleHome = () => {
            scroll.scrollToTop();
        }

        return (
            <FooterContainer>
                <FooterWrap>
           

                    <FooterLinksContainer>

                        {/* <FooterLinksWrapper>
  
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>

                                <FooterLink to="/">Offices</FooterLink>
                                <FooterLink to="/">Vision</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                            </FooterLinkItems>




                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>

                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/siginin">Questions</FooterLink>
                        
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>

                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                    
                            </FooterLinkItems>

                        </FooterLinksWrapper> */}
                        
                    </FooterLinksContainer>
                    {/* <FooterMotto>Working Together for Success</FooterMotto> */}
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                                JHB Burger Stop
                            </SocialLogo>
                            <WebsiteRights>JHB Burger Stop © 2021 All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>

                                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>

        

                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin />
                                </SocialIconLink>
                                
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
                
            </FooterContainer>
        )
    }

    export default Footer
