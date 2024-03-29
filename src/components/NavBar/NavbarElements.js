import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: white;
    height: 80px;
    display: flex;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    border-bottom: 1px solid rgba(0, 0, 0, .15);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width:100%;
    padding: 0 24px;
    max-width: 1500px;
`;

export const NavLogo = styled(LinkS)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display:none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-110%, 70%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    gap: 40px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height:80px;
    align-items: center;
`

export const NavLinks = styled(LinkS)`
    color: black;
    display: flex;
    font-weight: 300;
    align-items: center;
    font-size: 15px;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #13D84B;
    }

    &.active {
        border-bottom: 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled.a`
    border-radius: 50px;
    background: #5524c9;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`