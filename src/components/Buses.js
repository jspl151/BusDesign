import React from 'react';
import { map } from '@laufire/utils/collection';
import Windows from './Windows';
import Driver from './Driver';
import Door from './Door';
import Wheels from './Wheels';
import ExtraFittings from './ExtraFittings';
import getRandomColor from '../services/getRandomColor';

const getBusStyle = (context) => {
	const { config: { roadHeight, busSize, busHeight }, data: bus } = context;

	return {
		width: `${ busSize }%`,
		height: `${ busSize - busHeight }%`,
		bottom: `${ roadHeight + bus.y }%`,
		left: `${ bus.x }%`,
		animation: `${ bus.animation } 10s linear infinite`,
		backgroundColor: `#${ getRandomColor() }`,
		transform: `scaleX(${ bus.direction })`,
	};
};

const Buses = (context) => {
	const { config: { buses }} = context;

	return <div>
		{map(buses, (bus, index) =>
			<div
				key={ index }
				style={ getBusStyle({ ...context, data: bus }) }
				className="bus"
			>
				<Driver { ...{ ...context, data: bus } }/>
				<Door { ...context }/>
				<Windows { ...{ ...context, data: bus } }/>
				<ExtraFittings { ...context }/>
				<Wheels { ...context }/>
			</div>)}
	</div>;
};

export default Buses;
