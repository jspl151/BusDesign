import { rndBetween } from '@laufire/utils/lib';

const min = 40;
const max = 60;

const config = {
	dif: 20,
	roadTop: 58,
	busWidth: rndBetween(min, max),
};

export default config;
