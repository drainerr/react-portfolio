import styles from './about.module.css';
import { SiGnubash, SiLinux, SiReact, SiCss3, SiHtml5 } from 'react-icons/si';
import { IoLogoJavascript, IoLogoSass } from 'react-icons/io';
import { FcLinux } from 'react-icons/fc';
const About = () => {
  return (
    <div className={styles.about}>
      <h1>
        :<span className={styles.user}>~</span>$ whoam<span className={styles.lastlet}>i</span>
      </h1>
      <p>
        I'm <b>George Kvrivishvili</b>, an Information Technology student who decided to learn Web
        Development and dive into that field. So far my knowledge covers the fundamentals of HTML,
        CSS, Sass, Javascript, React, and related technologies/tools. I don't have any experience in
        the industry yet, however, I often work on my personal projects to improve and broaden my
        practical skills.
      </p>
      <ul className={styles.skills}>
        <li>
          <SiHtml5 className={styles.html} />
        </li>
        <li>
          <SiCss3 className={styles.css} />
        </li>
        <li>
          <IoLogoSass className={styles.sass} />
        </li>
        <li>
          <IoLogoJavascript className={styles.js} />
        </li>
        <li>
          <SiReact className={styles.react} />
        </li>
        <li>
          <SiGnubash className={styles.bash} />
        </li>
        <li>
          <SiLinux className={styles.linux} />
        </li>
      </ul>
    </div>
  );
};

export default About;
