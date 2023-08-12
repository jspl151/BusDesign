import React from 'react';
import { map, values } from '@laufire/utils/collection';

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
