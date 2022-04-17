import image from '../../images/wp5591516.webp';
import styles from './projects.module.css';
const Projects = () => {
  return (
    <ul className={styles.projects}>
      <h1 className={styles.title}>{`< Projects />`}</h1>
      <li>
        <img src={image} alt="ra" className={styles.img}></img>
        <div className={styles.buttons}>
          <button>Demo</button>
          <button>Source Code</button>
        </div>
        <div className={styles.details}>
          <h4>Covid Statistics </h4>
        </div>
      </li>
      <li>
        <img src={image} alt="ra" className={styles.img}></img>
        <div className={styles.buttons}>
          <button>Demo</button>
          <button>Source Code</button>
        </div>
        <div className={styles.details}>
          <h4>Covid Statistics </h4>
        </div>
      </li>
      <li>
        <img src={image} alt="ra" className={styles.img}></img>
      </li>
      <li>
        <img src={image} alt="ra" className={styles.img}></img>
      </li>
      <li>
        <img src={image} alt="ra" className={styles.img}></img>
      </li>
      <li>
        <img src={image} alt="ra" className={styles.img}></img>
      </li>
      <li>
        <img src={image} alt="ra" className={styles.img}></img>
      </li>
      <li>
        <img src={image} alt="ra" className={styles.img}></img>
      </li>
    </ul>
  );
};

export default Projects;
