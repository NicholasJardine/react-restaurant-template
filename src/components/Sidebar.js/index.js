import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SidebarRoute,
    sideBtnWrap
} from './SidebarElements'


const Sidebar = () => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
                <SidebarMenu>
                
                <SidebarLink to='/'>Burgers</SidebarLink>
                <SidebarLink to='/'>Pizza</SidebarLink>
                <SidebarLink to='/'>Sweet Tooth</SidebarLink>

                </SidebarMenu>
                <BtnWrap>
                    <Button primary='true' round='true' big = 'true' to='/contact' >Contact Us</Button>
                </BtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
