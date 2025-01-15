import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./DevList.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Postman", progress: 60, className: "postman-progress", years: 2 },
    { name: "Git", progress: 85, className: "github-progress", years: 2 },
    { name: "Firebase", progress: 70, className: "firebase-progress", years: 2}
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <ul>
        {devs.map((dev, index) => (
          <li key={index}>
            <span>{dev.name}: {`${dev.years} years`}</span>
            <ProgressBar progress={dev.progress} className={dev.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechList;