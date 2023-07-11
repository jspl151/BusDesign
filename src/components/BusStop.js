import { React } from 'react';
import { map } from '@laufire/utils/collection';
import Windows from './Windows';
import Driver from './Driver';
import Door from './Door';
import Wheels from './Wheels';

const getBusStyle = (context) => {
	const { config: { busWidth, dif, roadHeight }, data: bus } = context;

	return {
		width: `${ busWidth }%`,
		height: `${ busWidth - dif }%`,
		bottom: `${ roadHeight + bus.y }%`,
		left: `${ bus.x }%`,
		animation: `${ bus.animation }   linear infinite`,
		backgroundColor: bus.backgroundColor,
		transform: `scaleX(${ bus.direction })`,
	};
};

const BusStop = (context) => {
	const { config: { buses }} = context;

	return <div>
		{map(buses, (bus, index) =>
			<div
				key={ index }
				style={ getBusStyle({ ...context, data: bus }) }
				className="bus"
			>
				<Driver { ...context }/>
				<Door { ...context }/>
				<Windows { ...context }/>
				<Wheels { ...context }/>
			</div>)}
	</div>;
};

export default BusStop;
