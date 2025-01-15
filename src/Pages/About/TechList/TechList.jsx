import  { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./TechList.scss"

const TechList = () => {
  const [techs] = useState([
    { name: "ReactJS", progress: 100, className: "react-progress", years: 2 },
    { name: "NodeJS", progress: 70, className: "node-progress", years: 1 },
    { name: "TailwindCss", progress: 90, className: "TailwindCss-progress", years: 2 },
    { name: "ExpressJS", progress: 70, className: "express-progress", years: 1}
  ]);

  return (
    <div>
      <h2>Frameworks & Technologies</h2>
      <ul>
        {techs.map((tech, index) => (
          <li key={index}>
            <span>{tech.name}: {`${tech.years} years`}</span>
            <ProgressBar progress={tech.progress} className={tech.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;