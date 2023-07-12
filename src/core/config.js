import { rndBetween } from '@laufire/utils/lib';

const min = 30;
const max = 50;

const config = {
	roadHeight: 25,
	stripesCount: 8,
	stripeRight: 15,
	busWidth: rndBetween(min, max),
	dif: 20,
	doorPanelCount: 2,
	doorPanelRight: 0.8,
	windowRight: 1.4,
	windowsCount: 4,
	passengers: [
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
		backgroundColor: ['violet', 'brown', 'lightblue', 'yellowGreen'],
		direction: 1,
		driverImage: './images/driver1.png',
	},
	{
		x: 20,
		y: 5,
		animation: 'nextBusForward',
		backgroundColor: ['red', 'yellow', 'green', 'orange'],
		direction: 1,
		driverImage: './images/driver.png',
	},
	{
		x: 40,
		y: -15,
		animation: 'busReverse',
		backgroundColor: ['violet', 'brown', 'green', 'orange'],
		direction: -1,
		driverImage: './images/driver2.jpeg',
	},
	{
		x: 60,
		y: -25,
		animation: 'nextBusReverse',
		backgroundColor: ['red', 'yellow', 'lightblue', 'yellowGreen'],
		direction: -1,
		driverImage: './images/driver3.jpeg',
	}],

};

export default config;
