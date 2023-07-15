import React from 'react';
import { map } from '@laufire/utils/collection';
import Windows from './Windows';
import Driver from './Driver';
import Door from './Door';
import Wheels from './Wheels';
import { rndBetween } from '@laufire/utils/lib';
import ExtraFittings from './ExtraFittings';
import getRandomHex from '../services/getRandomHex';

const min = 40;
const max = 50;
const dif = 20;

const getBusStyle = (context) => {
	const { config: { roadHeight }, data: bus } = context;
	const size = rndBetween(min, max);

	return {
		width: `${ size }%`,
		height: `${ size - dif }%`,
		bottom: `${ roadHeight + bus.y }%`,
		left: `${ bus.x }%`,
		animation: `${ bus.animation } 0s linear infinite`,
		backgroundColor: `#${ getRandomHex() }`,
		transform: `scaleX(${ bus.direction })`,
	};
};

const Buses = (context) => {
	const { config: { buses }} = context;

	return <div>
		{map(buses, (bus) =>
			<div
				key={ bus }
				style={ getBusStyle({ ...context, data: bus }) }
				className="bus"
			>
				<Driver { ...{ ...context, data: bus } }/>
				<Door { ...context }/>
				<Windows { ...context }/>
				<ExtraFittings { ...context }/>
				<Wheels { ...context }/>
			</div>)}
	</div>;
};

export default Buses;
