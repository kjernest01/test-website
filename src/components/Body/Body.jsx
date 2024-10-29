import React, {useRef} from "react"
import "./Body.css"
// import Hero from "../Hero/Hero"
import Navbar from "../Navbar/Navbar"
import About from "../About/About"
import Work from "../Work/Work"
import Projects from "../Projects/Projects"
import Education from "../Education/Education"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

// const Body = () => {
//     return (
//         <div className="app-container">
//             <div className="body-container">
//                 <div className="body-navigator">
//                     <Navbar />
//                 </div>

//                 <div className="body-content">
//                     <About />
//                     <Work />
//                     <Projects />
//                     <Education />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Body

// import React, { useRef } from 'react';
// import Navbar from './Navbar';
// import About from './About/About';
// import Work from './Work';
// import Projects from './Projects';
// import Education from './Education';

const AppContainer = () => {
    // Create refs for each section
    const aboutRef = useRef(null);
    const workRef = useRef(null);
    const projectsRef = useRef(null);
    const educationRef = useRef(null);

    // Scroll to a specific section
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className="app-container" id="container">
            <div className="body-container">
                <div className="body-navigator">
                    <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, workRef, projectsRef, educationRef }} />
                </div>

                <div className="body-content">
                    <section ref={aboutRef}>
                        <About />
                    </section>
                    <section ref={workRef}>
                        <Work />
                    </section>
                    <section ref={projectsRef}>
                        <Projects />
                    </section>
                    <section ref={educationRef}>
                        <Education />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AppContainer;
