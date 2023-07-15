import React from 'react';
import { map } from '@laufire/utils/collection';

const Wheels = (context) => {
	const { config: { wheelLeft, wheels }} = context;

	return <div>
		{ map(wheels, (wheel) =>
			<div
				key={ wheel }
				{ ...{
					style: {	left: `${ wheelLeft * wheel.x }%`	 },
					className: 'wheelCovers',
				} }
			>
				<div className="outerWheels">
					<div className="innerWheels"/>
				</div></div>)}
	</div>;
};

export default Wheels;
