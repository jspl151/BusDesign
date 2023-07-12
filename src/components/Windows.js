import React from 'react';
import { map } from '@laufire/utils/collection';
import { rndValues } from '@laufire/utils/random';

const Windows = (context) => {
	const { config: { windowRight, passengers, windowsCount }} = context;

	return <div>
		{(map(rndValues(passengers, windowsCount), (passenger, key) =>
			<div
				key={ window }
				style={ {
					left: `${ windowRight * (key + 1) }%`,
					backgroundImage: `url(${ process.env.PUBLIC_URL }${ passenger })`,
				} }
				className="window"
			/>))}
	</div>;
};

export default Windows;
