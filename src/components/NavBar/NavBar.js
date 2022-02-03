import React from 'react'
import { FaBars } from 'react-icons/fa';
import avocado from '../../images/avocado.png'
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
} from './NavbarElements'

const NavBar = ({ toggle }) => {
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
                            <NavBtnLink href='https://apps.apple.com/us/app/avocado-social-investing/id1561473335' target="_blank">Download the App</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default NavBar
