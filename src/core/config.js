import { rndBetween } from '@laufire/utils/lib';

const min = 40;
const max = 60;

const config = {
	roadHeight: 25,
	stripesCount: 8,
	stripeRight: 15,
	busWidth: rndBetween(min, max),
	dif: 20,
	windowRight: 2,
	windowImages: [
		'./images/krishna.gif',
		'./images/girl.gif',
		'./images/cat.gif',
		'./images/images.gif',
	],
	buses: [{
		x: 2,
		y: 3,
		animation: 'busForward',
		backgroundColor: '#ffca00',
		direction: 1,
	},
	{
		x: 40,
		y: -15,
		animation: 'busReverse',
		backgroundColor: 'green',
		direction: -1,
	}],

};

export default config;
