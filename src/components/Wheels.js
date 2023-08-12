import React from 'react';
import { map } from '@laufire/utils/collection';

const Wheels = (context) => {
	const { config: { wheels }} = context;

	return <div>
		{ map(wheels, (wheel, index) =>
			<div
				key={ index }
				{ ...{
					style: {	left: `${ wheel.x }%`	 },
					className: 'wheelCovers',
				} }
			>
				<div className="outerWheels">
					<div className="innerWheels"/>
				</div></div>)}
	</div>;
};

export default Wheels;
