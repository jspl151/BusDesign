import React from 'react';
import { map } from '@laufire/utils/collection';
import { rndValues } from '@laufire/utils/random';

const Windows = (context) => {
	const { config: { windowLeft, windows, windowsCount }} = context;

	return <div>
		{(map(rndValues(windows, windowsCount), (window, key) =>
			<div
				key={ window }
				style={ {
					left: `${ windowLeft * (key + 1) }%`,
					backgroundImage: `url(${ process.env.PUBLIC_URL }${ window })`,
				} }
				className="window"
			/>))}
	</div>;
};

export default Windows;
