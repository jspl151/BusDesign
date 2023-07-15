
const min = 2;
const max = 8;
const hexChars = 16;

const getRandomHex = () => Math.random().toString(hexChars)
	.substring(min, max);

// eslint-disable-next-line no-console
console.log(Math.random().toString(hexChars)
	.substring(min, max));

export default getRandomHex;
