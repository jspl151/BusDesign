import { map } from '@laufire/utils/collection';
import { React } from 'react';

const Windows = (context) => {
	const { config: { windowRight, windowImages }} = context;

	return <div>
		{map(windowImages, (window, key) =>
			<div
				key={ window }
				style={ {
					right: `${ windowRight * (key + 1) }%`,
					backgroundImage: `url(${ process.env.PUBLIC_URL }${ window })`,
				} }
				className="window"
			/>)}
	</div>;
};

export default Windows;
