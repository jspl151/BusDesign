import { rndBetween } from '@laufire/utils/lib';

const min = 50;
const max = 75;

const config = {
	roadHeight: 25,
	stripesCount: 8,
	stripeRight: 15,
	busWidth: rndBetween(min, max),
	dif: 20,
	doorPanelCount: 2,
	doorPanelRight: 1,
	windowRight: 1.4,
	windowsCount: 4,
	driverWindowImages: [
		'./images/driver1.jpg',
		'./images/driver2.jpeg',
		'./images/driver3.jpeg',
		'./images/driver4.webp',
	],
	windowImages: [
		'./images/krishna.gif',
		'./images/girl.gif',
		'./images/cat.gif',
		'./images/images.gif',
		'./images/boy1.webp',
		'./images/boy2.avif',
		'./images/dog.jpg',
		'./images/girl1.jpg',
		'./images/girl2.jpeg',
		'./images/Murugan.jpg',
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
