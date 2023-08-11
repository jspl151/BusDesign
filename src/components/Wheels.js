import React from 'react';
import { map } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

const Wheels = (context) => {
	const { config: { wheelLeft, wheels }} = context;

	peek(wheels);
	return <div>
		{ map(wheels, (wheel, index) =>
			<div
				key={ index }
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
