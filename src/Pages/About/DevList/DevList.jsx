import { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./DevList.scss"

const TechList = () => {
  const [devs] = useState([
    { name: "Postman", progress: 50, className: "postman-progress", years: 1/2 },
    { name: "Git", progress: 70, className: "github-progress", years: 1 },
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