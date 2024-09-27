import React from "react";
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
    return (
        <div id='home' className="hero">
            <img src={profile_img} alt="profile_img"></img>
            <h1><span>Vikram Ratan's</span> Portfolio</h1>
            <p>I'm a hardworker and I have done a lot of projects</p>
            <div className="hero-action">
                <AnchorLink className="anchor-link" offset={50} href='#contact'><div className="hero-connect">Connect with me!</div></AnchorLink>
                <div className="hero-resume">My Resume</div>
            </div>
        </div >
        // <></>
    )
}

export default Hero
