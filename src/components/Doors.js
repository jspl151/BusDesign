import React from 'react';
import { map } from '@laufire/utils/collection';

const Doors = (context) => {
	const { config: { doorFrames }} = context;

	return (
		<div className="doors">
			{(map(doorFrames, (doorFrame, index) =>
				<div
					key={ index }
					style={ {
						right: `${ doorFrame.x }%`,
					} }
					className="doorFrame"
				/>))}
		</div>);
};

export default Doors;
