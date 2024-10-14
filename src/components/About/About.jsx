import React from "react";
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

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
                        <p>Hey There! I’m a Data Analyst and currently pursuing a master’s in Business Analytics and Artificial Intelligence at the University of Texas at Dallas. With over three years of experience as both a Business and Data Analyst, I specialize in turning complex data into actionable insights and building visual dashboards that drive stakeholder decision-making.
                        </p>
                        <p>My expertise spans identifying trends, optimizing processes, and delivering data-driven solutions that enhance business performance. Passionate about leveraging cutting-edge tools, I thrive on pushing the boundaries of data innovation, whether through predictive modeling, AI applications, or creative visualizations. Outside of work, I’m an extrovert with a love for travel, history, and taking on new adventures—and I also cook a mean biryani! If you're intrigued by data, creativity, or a good adventure, let’s connect and see where our paths might cross!
                        </p>
                    </div>
                    <div className="about-skills">

                        <div className="about-skill">
                            <h1><span>Cloud Data Warehousing & Computing</span></h1>
                            <p>AWS</p>
                            <p>Snowflake</p>
                            {/*<hr style={{ width: "60%" }}></hr>*/}
                        </div>

                        <div className="about-skill">
                            <h1><span>Data Visualization</span></h1>
                            <p>Tableau</p>
                            <p>Power BI</p>
                            <p>Excel</p>
                            {/*<hr style={{ width: "60%" }}></hr>*/}
                        </div>

                        <div className="about-skill">
                            <h1><span>Programming & Data Manipulation</span></h1>
                            <p>Python</p>
                            <p>SQL</p>
                            {/*<hr style={{ width: "60%" }}></hr>*/}
                        </div>

                        <div className="about-skill">
                            <h1><span>Machine Learning & AI</span></h1>
                            <p>Tensorflow</p>
                            <p>Sci-kit Learn</p>
                            {/*<hr style={{ width: "60%" }}></hr>*/}
                        </div>

                        <div className="about-skill">
                            <h1><span>Database Management</span></h1>
                            <p>MySQL</p>
                            <p>PostgreSQL</p>
                            {/*<hr style={{ width: "60%" }}></hr>*/}
                        </div>

                    </div>
                </div>

            </div>

            {/* <div className="about-achievements">
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
            </div> */}

        </div>
    )
}

export default About
