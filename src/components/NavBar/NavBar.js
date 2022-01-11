import React from 'react'
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home' smooth={true} offset={-40} duration={1000}>Avocado</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} offset={-40} duration={1000}>About us</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink href='http://eepurl.com/hHIAf9' target="_blank">Download the App</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar
