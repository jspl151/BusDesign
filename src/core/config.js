import { rndBetween } from '@laufire/utils/lib';
import krishna from '../images/krishna.gif';
import girl from '../images/girl.gif';
import boy from '../images/images.gif';
import cat from '../images/cat.gif';

const min = 40;
const max = 60;

const config = {
	dif: 20,
	roadTop: 58,
	busWidth: rndBetween(min, max),
	windowRight: 2,
	windowImages: [krishna, girl, cat, boy],

};

export default config;
