import Project from './project-card';
import styles from './projects.module.css';
import List from './projects-list';
const Projects = () => {
  return (
    <ul className={styles.projects}>
      {List.map((project) => (
        <Project
          name={project.name}
          techs={project.techs}
          demo={project.demo}
          code={project.code}
        />
      ))}
    </ul>
  );
};

export default Projects;
