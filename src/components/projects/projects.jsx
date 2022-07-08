import Project from './project-card';
import styles from './projects.module.css';
import List from './projects-list';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import { EffectCoverflow, Scrollbar } from 'swiper';
import './swiper.css';

const Projects = () => {
	const [width, setWidth] = useState(window.innerWidth);
	window.onresize = () => {
		setWidth(window.innerWidth);
	};

	return (
		<ul className={styles.projects}>
			<Swiper
				slidesPerView={width > 768 ? 3 : 1}
				modules={[EffectCoverflow, Scrollbar]}
				effect={'coverflow'}
				scrollbar={{ draggable: true }}
			>
				{List.map((project) => (
					<SwiperSlide>
						<Project
							name={project.name}
							techs={project.techs}
							demo={project.demo}
							code={project.code}
							img={project.image}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</ul>
	);
};

export default Projects;
