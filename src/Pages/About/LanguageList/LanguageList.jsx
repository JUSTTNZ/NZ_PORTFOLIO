import React, { useState } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./LanguageList.scss"

const LanguageList = () => {
  const [languages] = useState([
    { name: "HTML", progress: 75, className: "web-progress", years: 2 },
  ]);

  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {languages.map((language, index) => (
          <li key={index}>
            <span>{language.name}: {`${language.years} years`}</span>
            <ProgressBar progress={language.progress} className={language.className} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageList;