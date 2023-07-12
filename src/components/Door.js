import React from 'react';
import { map, range } from '@laufire/utils/collection';

const Door = (context) => {
	const { config: { doorFramesCount, doorFramesRight }} = context;

	return <div>
		<div className="door"/>
		{(map(range(0, doorFramesCount), (doorFrame, key) =>
			<div
				key={ doorFrame }
				style={ {
					right: `${ doorFramesRight * (key + 1) }%`,
				} }
				className="doorFrame"
			/>))}
	</div>;
};

export default Door;
