import { rndBetween } from '@laufire/utils/lib';
import { rndValues } from '@laufire/utils/random';

const windowsCount = 4;
const windows = [
	'./images/krishna.gif',
	'./images/girl.gif',
	'./images/cat.gif',
	'./images/images.gif',
	'./images/boy1.webp',
	'./images/dog.jpg',
	'./images/girl1.jpg',
	'./images/girl2.jpeg',
	'./images/Murugan.jpg',
];
const images = rndValues(windows, windowsCount);
const minSize = 40;
const maxSize = 50;

const config = {
	roadHeight: 35,
	stripesCount: 8,
	stripeRight: 15,
	indicators: [
		{ y: 6, backgroundColor: 'red' },
		{ y: 19.5, backgroundColor: 'orange' },
	],
	doorFrames: [{ x: 8 }, { x: 50 }],
	wheels: [{ x: 3.1 }, { x: 76.5 }],
	busHeight: 20,
	busSize: rndBetween(minSize, maxSize),
	buses: [
		{
			x: 2,
			y: -3,
			animation: 'busForward',
			direction: 1,
			driverImage: './images/driver1.png',
			windows: { x: 1.4, passengers: images },
		},
		{
			x: 20,
			y: -5,
			animation: 'nextBusForward',
			direction: 1,
			driverImage: './images/driver.png',
			windows: { x: 1.4, passengers: images },
		},
		{
			x: 40,
			y: -15,
			animation: 'busReverse',
			direction: -1,
			driverImage: './images/driver2.jpeg',
			windows: { x: 1.4, passengers: images },
		},
		{
			x: 60,
			y: -25,
			animation: 'nextBusReverse',
			direction: -1,
			driverImage: './images/driver3.jpeg',
			windows: { x: 1.4, passengers: images },
		},
	],

};

export default config;
