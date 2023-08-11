import React from 'react';
import { map } from '@laufire/utils/collection';

const Door = (context) => {
	const { config: { doorFrames }} = context;

	return (
		<div className="door">
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

export default Door;
