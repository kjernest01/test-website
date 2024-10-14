import React from "react";
import './Education.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import education_data from "../../assets/education_data";

const Education = () => {
    return (
        <div id='education' className="education">
            <div className="education-title">
                <h1>Education</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="education-item-container">
                <div className="education-item">
                    {education_data.map((education, index) => {
                        return <div key={index} className="education-format">
                            <img src={education.e_logo} alt={`${education.e_name} logo`} />
                            <div className="education-info">
                                <h2>{education.e_name}</h2>
                                <h3>{education.e_degree}</h3>
                            </div>

                        </div>
                    })}
                </div>
            </div>


        </div>
    )
}

export default Education