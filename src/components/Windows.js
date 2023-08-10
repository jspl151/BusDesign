import React from 'react';
import { map } from '@laufire/utils/collection';
import { values } from '@laufire/utils/lib';

const Windows = (context) => {
	const { data: { windows }} = context;

	return <div>
		{values(map(windows, (window, key) =>
			<div
				key={ key }
				style={ {
					left: `${ window.windowLeft * (key + 1) }%`,
					backgroundImage: `url(${ process.env.PUBLIC_URL }${ window.passengers })`,
				} }
				className="window"
			/>))}
	</div>;
};

export default Windows;
