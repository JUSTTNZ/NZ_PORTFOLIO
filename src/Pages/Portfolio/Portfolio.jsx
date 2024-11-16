import  { useEffect, useState } from "react";
import Loader from "react-loaders";
import "./Portfolio.scss";
import AnimatedLetters from "../../components/AnimatedLetters";
// import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolioData, setPortfolioData] = useState([])
    // console.log("portfolio",portfolioData.portfolio[0].cover);
    
    // console.log("portfolio type",typeof portfolioData.portfolio[0]);

    useEffect(() => {
        fetch('/data/portfolio.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => setPortfolioData(data.portfolio))
        .catch(error => console.error('Error fetching JSON:', error));
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000); 
    return () => { 
        clearTimeout(timer);
    }
    }, []);
    
   

    const renderPortfolio = (portfolio) => { 
        return (
            <div className = "images-container mr-4 grid grid-cols-1 lg:grid-cols-4 gap-4 ">
                {
                    portfolio.map((port, idx) => {
                      {/* const imagePath = require(`${port.cover}`) */}
                      {/* console.log(`image source for ${port.title}:`, port.cover) */}
                        return (
                            <div key={idx} className="image-box w-full grid grid-cols-4 ">
                                <img src={port.cover} alt="portfolio" className = "portfolio-image"/>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={() => window.open(port.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return (
        <>
            <div className="container portfolio-page">
                <h1 className = "page-title">
                    <AnimatedLetters letterClass = {letterClass} strArray={"Portfolio".split("")} idx={15}/>
                </h1>
                <div className="scrollable-content">{portfolioData.length > 0 ? renderPortfolio(portfolioData) : <Loader type="pacman"/>}</div>
            </div>
            
        </>
    );
}

export default Portfolio