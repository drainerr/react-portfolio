import { SiGithub, SiLinkedin, SiTwitter, SiGmail } from 'react-icons/si';
import styles from './socials.module.css';
const Socials = () => {
  return (
    <ul className={styles.list}>
      <a href="https://github.com/GeorgeKVR" target="_blank" rel="noreferrer">
        <SiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/george-kvrivishvili-5667321b4/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLinkedin />
      </a>
      <a href="https://twitter.com/georgeavee" target="_blank" rel="noreferrer">
        <SiTwitter />
      </a>
      <a href="mailto:george.kvrivi@gmail.com">
        <SiGmail />
      </a>
    </ul>
  );
};

export default Socials;
