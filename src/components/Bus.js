import { React } from 'react';
import { map } from '@laufire/utils/collection';
import Windows from './Widows';

const getBusStyle = (context) => {
	const { config: { busWidth, dif, roadHeight }, data: bus } = context;

	return {
		width: `${ busWidth }%`,
		height: `${ busWidth - dif }%`,
		bottom: `${ roadHeight + bus.y }%`,
		left: `${ bus.x }%`,
		animation: `${ bus.animation }  3s linear infinite`,
		backgroundColor: bus.backgroundColor,
		transform: `scaleX(${ bus.direction })`,
	};
};

const Bus = (context) => {
	const { config: { buses }} = context;

	return <div>
		{map(buses, (bus, index) =>
			<div
				key={ index }
				style={ getBusStyle({ ...context, data: bus }) }
				className="bus"
			>
				<Windows { ...context }/>
				<div className="cover"/>
				<div className="tire"/>
			</div>)}
	</div>;
};

export default Bus;
