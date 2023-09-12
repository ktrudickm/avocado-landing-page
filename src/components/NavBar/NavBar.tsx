import React from 'react'
import { FaBars } from 'react-icons/fa';
import { ReactComponent as Logo } from './Full.svg'
import { Link as LinkS } from 'react-scroll';
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
                    {/* <NavLogo to='home' smooth={true} offset={-40} duration={1000}>Avocado</NavLogo> */}
                    <Logo/>
                    <MobileIcon onClick={() => setOpen(!open)}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItem>
                            <NavLinks to='about' smooth={true} offset={-40} duration={1000}>Our Story</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to='product' smooth={true} offset={-40} duration={1000}>Our Product</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='team' smooth={true} offset={-40} duration={1000}>Our Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <LinkS className='waitlist' to='waitlist' smooth={true} offset={-40} duration={1000}>
                                <div className='text'>Join Waitlist</div>
                            </LinkS>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='contact' smooth={true} offset={-40} duration={1000}>Contact Us</NavLinks>
                        </NavItem> */}
                        {/* <NavBtn>
                            <NavBtnLink href='https://apps.apple.com/us/app/avocado-social-investing/id1561473335' target="_blank">Download the App</NavBtnLink>
                        </NavBtn> */}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
            {open &&
                <div className="mobile-nav-container">
                    <NavMenu className="mobile-nav-menu">
                        {/* <NavItem>
                            <NavLinks onClick={handleMobileNavOnClick} to='about' smooth={true} offset={-80} duration={1000}><span>Our Story</span></NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks onClick={handleMobileNavOnClick} to='product' smooth={true} offset={-80} duration={1000}><span>Our Product</span></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={handleMobileNavOnClick} to='team' smooth={true} offset={-80} duration={1000}><span>Our Team</span></NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks onClick={handleMobileNavOnClick} to='waitlist' smooth={true} offset={-80} duration={1000}><span>Join Waitlist</span></NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks onClick={handleMobileNavOnClick} to='contact' smooth={true} offset={-80} duration={1000}><span>Contact Us</span></NavLinks>
                        </NavItem> */}
                        {/* <NavBtn>
                            <NavBtnLink href='https://apps.apple.com/us/app/avocado-social-investing/id1561473335' target="_blank">Download the App</NavBtnLink>
                        </NavBtn> */}
                    </NavMenu>
                </div>
            }
        </>
    )
}

export default NavBar
