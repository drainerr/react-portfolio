import styles from './header.module.css';
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h2>George Kvrivishvili</h2>
      <ul className={styles.nav}>
        <li>About</li>
        <li>Projects</li>
        <li>Linkedin</li>
      </ul>
    </div>
  );
};

export default Header;
