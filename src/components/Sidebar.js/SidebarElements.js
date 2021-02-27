import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'


const SidebarContainer = styled.div`
    position:fixed;
    z-index: 999;
    width:350px;
    height:100%;
    background: #ffc500;
    display:grid;
    align_items:center;
    right: ${({isOpen}) => (isOpen ? '0' : '-100px')};
    top:0;
    transition: 0.3s ease-in-out;
    @media screen and (max-width:400px){
        width:100%;
    }
`

const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
border: transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`


const CloseIcon = styled(FaTimes)`
    color: #000;
`


const SidebarMenu = styled.div`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align:center;
    margin-bottom: 4rem;
    margin-top: 4rem;
    @media screen and (max-width:400px){
        grid-template-rows: repeat(3, 80px);
    }
`
const SidebarWrapper = styled.div`
`

const SidebarLink = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    color: #000;
    font-size:1.5rem;
    text-decoration: none;
    list-style:none;
    cursor:pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #e31837;
        transition: 0.2s ease-in-out;

    }
`


const SideBtnWrap = styled.div`
display:flex;
justify-content: center;
height:80px;
`

const SidebarRoute = styled(Link)`
    font-size:1.4rem;
    padding:1rem 2rem;
    border:none;
    background: #e31837;
    color:#fff;
    transition: 0.2s ease-out;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:left;
    border-radius:32px;

    &:hover{
        background: #ffc500;
        transition: 0.2s ease-out;
        cursor:pointer;
    }
    @media screen and (max-width: 768px) {

        p{
            margin-top:-10px;
        }
        margin-left:-16px;
        height:48px;
        
    }

`