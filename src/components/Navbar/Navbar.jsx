import React, { useState, useRef } from "react";
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';


const Navbar = ({ scrollToSection, refs }) => {

    // JavaScript to toggle the navbar position
    // window.addEventListener('scroll', () => {
    //     const navbar = document.querySelector('.navbar');
    //     const scrollPosition = window.scrollY;

    //     // Check if the user has scrolled down a certain amount
    //     if (scrollPosition > 50) { // Adjust this threshold as needed
    //         navbar.classList.add('scrolled');
    //     } else {
    //         navbar.classList.remove('scrolled');
    //     }
    // });

    const [menu, setMenu] = useState('home');
    const menuReference = useRef();

    // const openMenu = () => {
    //     menuReference.current.style.right = "0";
    // }
    // const closeMenu = () => {
    //     menuReference.current.style.right = "-350px";
    // }

    return (
        <div className="navbar">
            <h1 href='#home'>Vikram</h1>
            {/* <img src={logo} alt="logo" /> */}
            <img src={menu_open} alt="logo" className="nav-mob-open" />
            <ul ref={menuReference} className="nav-menu">
                {/* <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" /> */}
                {/* <li><AnchorLink className="anchor-link" offset={50} href='#home'><p onClick={() => setMenu('home')} className={menu === 'home' ? 'active' : ''}>Home</p></AnchorLink></li> */}
                <li>
                    {/* <AnchorLink className="anchor-link" offset={50} href="#about"> */}
                    <p
                        onClick={() => {
                            scrollToSection(refs.aboutRef);
                            setMenu('about');
                        }}
                        className={menu === 'about' ? 'active' : ''}
                    >
                        About Me
                    </p>
                    {/* </AnchorLink> */}
                </li>
                <li>
                    {/* <AnchorLink className="anchor-link" offset={50} href="#work"> */}
                    <p
                        onClick={() => {
                            scrollToSection(refs.workRef);
                            setMenu('work');
                        }}
                        className={menu === 'work' ? 'active' : ''}
                    >
                        Work
                    </p>
                    {/* </AnchorLink> */}
                </li>
                <li>
                    {/* <AnchorLink className="anchor-link" offset={50} href="#projects"> */}
                    <p
                        onClick={() => {
                            scrollToSection(refs.projectsRef);
                            setMenu('projects');
                        }}
                        className={menu === 'projects' ? 'active' : ''}
                    >
                        Projects
                    </p>
                    {/* </AnchorLink> */}
                </li>
                <li>
                    {/* <AnchorLink className="anchor-link" offset={50} href="#education"> */}
                    <p
                        onClick={() => {
                            scrollToSection(refs.educationRef);
                            setMenu('education');
                        }}
                        className={menu === 'education' ? 'active' : ''}
                    >
                        Education
                    </p>
                    {/* </AnchorLink> */}
                </li>

                {/* <li><AnchorLink className="anchor-link" offset={50} href='#contact'><p onClick={() => setMenu('contact')} className={menu === 'contact' ? 'active' : ''}>Contact</p></AnchorLink></li> */}
            </ul>
            <AnchorLink className="anchor-link" offset={50} href='#contact'><div className="nav-connect">Connect</div></AnchorLink>
        </div>
    )
}

export default Navbar