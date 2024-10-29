import React from "react";
import './Hero.css';
import profile_img from '../../assets/transparent_vikram.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import downarrow_img from '../../assets/down-arrow.png';

const Hero = () => {
    return (
        <div id='home' className="hero">
            <div className="divider">
                <div className="hero-information">
                    <h1>Vikram Ratan</h1>
                    <div className="hero-action">
                        <AnchorLink className="anchor-link" offset={50} href='#contact'><div className="hero-connect" href="#contact">Let's Connect</div></AnchorLink>
                        <div className="hero-resume">
                            <a href="./src/assets/resumes/Vikram_Ratan_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
                        </div>
                    </div>
                </div>

                <div className="hero-scroll" href="#container">
                    <p>Scroll for more</p>
                    <img src={downarrow_img} alt="" />
                </div>
            </div>

            <div className="hero-img">
                <img src={profile_img} alt="about_profile.svg"></img>
            </div>

        </div >
    )
}

export default Hero
