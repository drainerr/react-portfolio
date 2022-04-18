import styles from './projects.module.css';

const Project = (props) => {
  const { name, techs, code, demo, img } = props;
  return (
    <li>
      <img src={img} alt={name} className={styles.img}></img>
      <div className={styles.buttons}>
        <a href={demo} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={code} target="_blank" rel="noreferrer">
          Source Code
        </a>
      </div>
      <div className={styles.details}>
        <h4>{name}</h4>
      </div>
    </li>
  );
};

export default Project;
