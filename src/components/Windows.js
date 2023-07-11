import { map } from '@laufire/utils/collection';
import { rndValues } from '@laufire/utils/random';
import { React } from 'react';

const Windows = (context) => {
	const { config: { windowRight, windowImages, windowsCount }} = context;

	return <div>
		{(map(rndValues(windowImages, windowsCount), (window, key) =>
			<div
				key={ window }
				style={ {
					left: `${ windowRight * (key + 1) }%`,
					backgroundImage: `url(${ process.env.PUBLIC_URL }${ window })`,
				} }
				className="window"
			/>))}
	</div>;
};

export default Windows;
