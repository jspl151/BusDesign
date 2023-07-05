import { React } from 'react';
import { map } from '@laufire/utils/collection';
import Windows from './Widows';

const getBusStyle = (
	busWidth, dif, roadTop, bus
) => ({
	width: `${ busWidth }%`,
	height: `${ busWidth - dif }%`,
	top: `${ roadTop - (busWidth - dif) + bus.y }%`,
	left: `${ 1 + bus.x }%`,
	animation: `${ bus.animation } 3s linear infinite `,
	backgroundColor: bus.backgroundColor,
	transform: `scaleX(${ bus.direction })`,
});

const Bus = (context) => {
	const { config: { busWidth, dif, roadTop, buses }} = context;

	return <div>
		{map(buses, (bus) =>
			<div
				style={
					getBusStyle(
						busWidth, dif, roadTop, bus
					)
				}
				className="bus"
			>
				<Windows { ...context }/>
				<div className="cover"/>
				<div className="tire"/>
			</div>)}</div>;
};

export default Bus;
