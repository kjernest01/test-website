import React from "react";
import './Work.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import work_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Work = () => {
    return (
        <div id='work' className="work">
            <div className="work-title">
                <h1>Work Experience</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="work-container">
                {work_data.map((work, index) => (
                    <div className="work-item" key={index}>
                        <img src={work.w_img} alt="" />
                        <div className="work-description">
                            <div className="work-description-item">
                                <h1>Title: {work.w_name}</h1>
                                <h1>Country: {work.w_country}</h1>
                            </div>

                            <div className="work-description-item">
                                <h1>Description:</h1>
                                <h2>{work.w_desc}</h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="work-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
    )
}

export default Work
