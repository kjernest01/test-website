import React from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/vikram_ratan_about_profile.svg'

const About = () => {
    return (
        <div id='about' className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-paragraph">
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac vitae tempor auctor eros amet ultricies torquent. Vestibulum luctus habitasse purus integer ornare aenean cubilia. Maximus interdum ex mattis himenaeos nulla dis. Maecenas facilisi inceptos suspendisse varius ornare pretium.
                        </p>
                        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac vitae tempor auctor eros amet ultricies torquent.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }}></hr></div>
                        <div className="about-skill"><p>ReactJS</p><hr style={{ width: "70%" }}></hr></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{ width: "60%" }}></hr></div>
                        <div className="about-skill"><p>NextJS</p><hr style={{ width: "50%" }}></hr></div>
                    </div>
                </div>

            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>

        </div>
    )
}

export default About
