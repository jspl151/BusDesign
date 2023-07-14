const config = {
	roadHeight: 35,
	stripesCount: 8,
	stripeRight: 15,
	doorFramesCount: 2,
	doorFramesRight: 0.8,
	windowLeft: 1.4,
	windowsCount: 4,
	wheelLeft: 1.55,
	indicatorsBottom: 1.5,
	windows: [
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
	indicators: [
		{ y: 4, backgroundColor: 'red' },
		{ y: 13, backgroundColor: 'orange' },
	],
	wheels: [
		{ x: 2 },
		{ x: 51 },
	],
	buses: [{
		x: 2,
		y: -3,
		animation: 'busForward',
		backgroundColor: ['violet', '#eecf90', 'lightblue', 'yellowGreen'],
		direction: 1,
		driverImage: './images/driver1.png',
	},
	{
		x: 20,
		y: -5,
		animation: 'nextBusForward',
		backgroundColor: ['red', 'yellow', 'green', 'orange'],
		direction: 1,
		driverImage: './images/driver.png',
	},
	{
		x: 40,
		y: -15,
		animation: 'busReverse',
		backgroundColor: ['violet', '#eecf90', 'green', 'orange'],
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
