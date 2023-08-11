import React from 'react';
import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';

const Windows = (context) => {
	const { data: { windows: { x, passengers }}} = context;

	return <div>
		{values(map(passengers, (window, key) =>
			<div
				key={ key }
				style={ {
					left: `${ x * (key + 1) }%`,
					backgroundImage: `url(${ process.env.PUBLIC_URL }${ window })`,
				} }
				className="window"
			/>))}
	</div>;
};

export default Windows;
