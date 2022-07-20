import {
	SiReact as React,
	SiCss3 as Css,
	SiHtml5 as Html,
	SiFirebase as Firebase,
} from 'react-icons/si';
import { IoLogoJavascript as Js, IoLogoSass as Sass } from 'react-icons/io';
const List = [
	{
		name: 'Image Gallery',
		techs: [<React />, <Firebase />],
		demo: 'https://image-gallery-olive.vercel.app/',
		code: 'https://github.com/drainerr/Image-Gallery',
		image: require('../../images/projects/Image-gallery.png'),
	},
	{
		name: 'List Of Countries',
		techs: [<React />],
		demo: 'https://drainerr.github.io/Countries',
		code: 'https://github.com/drainerr/Countries/tree/main/src',
		image: require('../../images/projects/Countries.png'),
	},
	{
		name: 'Covid-19 Tracker',
		techs: [<Html />, <Sass />, <Js />],
		demo: 'https://drainerr.github.io/Covid-19-Tracker/',
		code: 'https://github.com/drainerr/Covid-19-Tracker/',
		image: require('../../images/projects/Covid-Tracker.png'),
	},
	{
		name: 'Virtual Keyboard',
		techs: [<Html />, <Css />, <Js />],
		demo: 'https://drainerr.github.io/Virtual-Keyboard/',
		code: 'https://github.com/drainerr/Virtual-Keyboard/',
		image: require('../../images/projects/virtual-keyboard.png'),
	},
	{
		name: 'Country Quizz',
		techs: [<React />, <Css />],
		demo: 'https://drainerr.github.io/Country-Quizz/',
		code: 'https://github.com/drainerr/Country-Quizz/tree/main/src',
		image: require('../../images/projects/Country-Quizz.png'),
	},
	{
		name: 'Pomodoro (25+5 Clock)',
		techs: [<Html />, <Sass />, <Js />],
		demo: 'https://drainerr.github.io/25-5-Clock/',
		code: 'https://github.com/drainerr/25-5-Clock/',
		image: require('../../images/projects/Pomodoro.png'),
	},
	{
		name: 'Arbeitnow Jobs',
		techs: [<React />, <Css />],
		demo: 'https://drainerr.github.io/Arbeitnow-Jobs',
		code: 'https://github.com/drainerr/Arbeitnow-Jobs/tree/main/src',
		image: require('../../images/projects/joblanding.png'),
	},
	{
		name: 'Windbnb',
		techs: [<React />, <Css />],
		demo: 'https://drainerr.github.io/Windbnb/',
		code: 'https://github.com/drainerr/Windbnb/tree/main/src',
		image: require('../../images/projects/Windbnb.png'),
	},
	{
		name: 'Space Tourism',
		techs: [<React />, <Sass />],
		demo: 'https://drainerr.github.io/Space-Tourism/',
		code: 'https://github.com/drainerr/Space-Tourism/tree/main/src',
		image: require('../../images/projects/space-tourism.png'),
	},
	{
		name: 'Simple Todo',
		techs: [<Html />, <Sass />, <Js />],
		demo: 'https://drainerr.github.io/Simple-Todo/',
		code: 'https://github.com/drainerr/Simple-Todo/',
		image: require('../../images/projects/Todo.png'),
	},
	{
		name: 'Drumpad',
		techs: [<Html />, <Sass />, <Js />],
		demo: 'https://drainerr.github.io/Drum-Machine/',
		code: 'https://github.com/drainerr/Drum-Machine/',
		image: require('../../images/projects/drum-machine.png'),
	},
];

export default List;
