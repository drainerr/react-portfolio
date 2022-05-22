import Project from "./project-card";
import styles from "./projects.module.css";
import List from "./projects-list";
import { useState } from "react";
import {
  BsFillArrowRightSquareFill as RightArrow,
  BsFillArrowLeftSquareFill as LeftArrow,
} from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const Projects = () => {
  const [currCard, setCurrCard] = useState(0);
  const len = List.length;

  const showNextCard = () => {
    setCurrCard(currCard + 1 > len - 1 ? 0 : currCard + 1);
  };

  const showPreviousCard = () => {
    setCurrCard(currCard - 1 < 0 ? len - 1 : currCard - 1);
  };

  return (
    <ul className={styles.projects}>
      <h1 className={styles.title}>{"<Projects/>"}</h1>
      <ul className={styles.dots}>
        {List.map((el, index) => (
          <li className={index === currCard ? styles.dot.active : styles.dot}>
            <GoPrimitiveDot onClick={() => setCurrCard(index)} />
            <span>{el.name}</span>
          </li>
        ))}
      </ul>
      {List.map((project, index) => (
        <div className={index === currCard ? "project active" : "project"}>
          {currCard === index && (
            <Project
              name={project.name}
              techs={project.techs}
              demo={project.demo}
              code={project.code}
              img={project.image}
            />
          )}
        </div>
      ))}
      <LeftArrow onClick={showPreviousCard} className={styles.leftArrow} />
      <RightArrow onClick={showNextCard} className={styles.rightArrow} />
    </ul>
  );
};

export default Projects;
