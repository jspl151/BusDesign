import React from 'react';
import { map } from '@laufire/utils/collection';

const Indicators = (context) => {
	const { config: { indicators }} = context;

	return <div>
		{(map(indicators, (indicator, index) =>
			<div
				key={ index }
				style={ {
					bottom: `${ indicator.y }%`,
					backgroundColor: indicator.backgroundColor,
				} }
				className="indicators"
			/>))}
	</div>;
};

export default Indicators;
