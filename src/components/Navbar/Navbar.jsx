import React, { useState,useRef } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

    const [menu, setMenu] = useState('home');
    const menuReference = useRef();

    const openMenu = () => {
        menuReference.current.style.right = "0";
    }
    const closeMenu = () => {
        menuReference.current.style.right = "-350px";
    }
    
    return (
        <div className="navbar">
            <img src={logo} alt="logo" />
            <img src={menu_open} onClick={openMenu} alt="logo" className="nav-mob-open" />
            <ul ref={menuReference} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className="anchor-link" offset={50} href='#home'><p onClick={() => setMenu('home')}>Home</p></AnchorLink>{menu === 'home' ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#about'><p onClick={() => setMenu('about')}>About Me</p></AnchorLink>{menu === 'about' ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#services'><p onClick={() => setMenu('services')}>Services</p></AnchorLink>{menu === 'services' ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#work'><p onClick={() => setMenu('work')}>Work</p></AnchorLink>{menu === 'work' ? <img src={underline} alt="" /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={() => setMenu('contact')}>Contact</p></AnchorLink>{menu === 'contact' ? <img src={underline} alt="" /> : <></>}</li>
            </ul>
            <AnchorLink className="anchor-link" offset={50} href='#contact'><div className="nav-connect">Connect with me!</div></AnchorLink>
        </div>
    )
}

export default Navbar
