import React from 'react'
import { FaBars } from 'react-icons/fa';
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
import './style.css';

const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const handleMobileNavOnClick = () => setOpen(false);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='home' smooth={true} offset={-40} duration={1000}>Avocado</NavLogo>
                    <MobileIcon onClick={() => setOpen(!open)}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} offset={-40} duration={1000}>About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='team' smooth={true} offset={-40} duration={1000}>Our Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contact' smooth={true} offset={-40} duration={1000}>Contact Us</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink href='https://apps.apple.com/us/app/avocado-social-investing/id1561473335' target="_blank">Download the App</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            {open &&
                <div className="mobile-nav-container">
                    <NavMenu className="mobile-nav-menu">
                        <NavItem>
                            <NavLinks onClick={handleMobileNavOnClick} to='about' smooth={true} offset={-80} duration={1000}><span>About Us</span></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={handleMobileNavOnClick} to='team' smooth={true} offset={-80} duration={1000}><span>Our Team</span></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={handleMobileNavOnClick} to='contact' smooth={true} offset={-80} duration={1000}><span>Contact Us</span></NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink href='https://apps.apple.com/us/app/avocado-social-investing/id1561473335' target="_blank">Download the App</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </div>
            }
        </>
    )
}

export default NavBar
