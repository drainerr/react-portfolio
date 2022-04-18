import styles from './projects.module.css';
import image from '../../images/wp5591516.webp';

const Project = (props) => {
  const { name, techs, code, demo } = props;
  return (
    <li>
      <img src={image} alt={name} className={styles.img}></img>
      <div className={styles.buttons}>
        <a href={demo} target="_blank">
          Demo
        </a>
        <a href={code} target="_blank">
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
