import { rndBetween } from '@laufire/utils/lib';
import krishna from '../images/krishna.gif';
import girl from '../images/girl.gif';
import boy from '../images/images.gif';
import cat from '../images/cat.gif';

const min = 40;
const max = 60;

const config = {
	dif: 20,
	roadTop: 78,
	busWidth: rndBetween(min, max),
	windowRight: 2,
	windowImages: [krishna, girl, cat, boy],
	buses: [{
		x: 2,
		y: 1,
		animation: 'busForward',
		backgroundColor: '#ffca00',
		direction: 1,
	},
	{
		x: 40,
		y: 17,
		animation: 'busReverse',
		backgroundColor: 'green',
		direction: -1,
	}],

};

export default config;
