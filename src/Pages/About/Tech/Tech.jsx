import "./Tech.scss"; 
import AnimatedLetters from "../../../components/AnimatedLetters";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {  FaCss3, FaHtml5,  FaReact } from "react-icons/fa"; 
import { SiRedux, SiJavascript, SiTailwindcss } from 'react-icons/si';
// import Loader from "react-loaders";
import TechList from "../TechList/TechList";

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return (
        <>
            <div className = "container about-page"> 
                <div className = "text-zone"> 
                    <h1>
                        <AnimatedLetters letterClass={letterClass}  strArray = {"About me".split("")} idx={15}/>
                    </h1>
                    <p>
                    I am a very ambitious full-stack developer with a unique background that has prepared me to be a team player who communicates effectively, faces problems analytically and has the technical skills to tackle any challenge. 
                    <br/>
                    <TechList />
                    <Link to="/about" className="flat-button">LANGUAGES</Link>
                    <br/>
                    <Link to="/about/dev" className="flat-button">DEVELOPMENT TOOLS</Link>
                    </p>
                </div>
                <div className="stage-cube-cont">
                    <div className="cubespinner"> 
                        <div className="face1">
                            <SiTailwindcss size={100} color="#38B2AC"/> {/* Using FaAmazon from react-icons */}
                        </div>
                        <div className="face2">
                            <FaHtml5 size={100} color="#F06529"/> {/* Using FaHtml5 from react-icons */}
                        </div>
                        <div className="face3">
                            <FaCss3 size={100} color="#28A4D9"/> {/* Using FaCss3 from react-icons */}
                        </div>
                        <div className="face4">
                            <FaReact size={100} color="#5ED4F4"/> {/* Using FaReact from react-icons */}
                        </div>
                        <div className="face5">
                            <SiJavascript size={100} color="#F7DF1E"/> {/* Using FaPython from react-icons */}
                        </div>
                        <div className="face6">
                            <SiRedux size={100} color="#764abc"/> {/* Using FaJava from react-icons */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <Loader type="pacman" /> */}
        </>
    )
}
export default About