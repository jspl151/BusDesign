import React from 'react';
import { map } from '@laufire/utils/collection';

const Door = (context) => {
	const { config: { doorFrames, doorFramesRight }} = context;

	return (
		<div className="door">
			{(map(doorFrames, (doorFrame) =>
				<div
					key={ doorFrame }
					style={ {
						right: `${ doorFramesRight * doorFrame.x }%`,
					} }
					className="doorFrame"
				/>))}
		</div>);
};

export default Door;
