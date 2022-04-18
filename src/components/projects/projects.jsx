import Project from './project-card';
import styles from './projects.module.css';
import List from './projects-list';
const Projects = () => {
  return (
    <ul className={styles.projects}>
      <h1 className={styles.title}>{'< Projects />'}</h1>
      {List.map((project) => (
        <Project
          name={project.name}
          techs={project.techs}
          demo={project.demo}
          code={project.code}
          img={project.image}
        />
      ))}
    </ul>
  );
};

export default Projects;
