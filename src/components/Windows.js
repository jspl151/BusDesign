import React from 'react';
import { map } from '@laufire/utils/collection';
import { rndValues } from '@laufire/utils/random';

const Windows = (context) => {
	const { config: { windowLeft, passengers, windowsCount }} = context;

	return <div>
		{(map(rndValues(passengers, windowsCount), (passenger, key) =>
			<div
				key={ passenger }
				style={ {
					left: `${ windowLeft * (key + 1) }%`,
					backgroundImage: `url(${ process.env.PUBLIC_URL }${ passenger })`,
				} }
				className="window"
			/>))}
	</div>;
};

export default Windows;
