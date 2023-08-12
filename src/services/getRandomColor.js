
const min = 2;
const max = 8;
const hexBase = 16;

const getRandomColor = () => Math.random().toString(hexBase)
	.substring(min, max);

export default getRandomColor;
