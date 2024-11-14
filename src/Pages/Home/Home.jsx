import { useEffect, useState } from 'react';
// import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoC from '../../assets/LogoC.png';
import AnimatedLetters from '../../components/AnimatedLetters';
import './Home.scss';
import Logo from './Logo/Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "Confidence, ".split("");
    const jobArray = "Frontend Developer.".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
      <div>
        <div className = "container home-page">
            <div className="text-zone">
                <h1>
                <span className = {`${letterClass} _8`}>H</span>
                <span className = {`${letterClass} _9`}>i</span>
                <br /> 
                <span className = {`${letterClass} _10`}>I</span>
                <span className = {`${letterClass} _11`}>'m</span>
                {/* <img src={LogoC} alt = "developer" /> */}
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={17} /> 
                </h1>
                <h2>Mechanical Engineering 2025 at Akanu-Ibiam Federal Polytechnic.</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            {/* <Logo className="Home"/> */}
        </div>
        {/* <Loader type="pacman" active /> */}
      </div>
    )
}

export default Home