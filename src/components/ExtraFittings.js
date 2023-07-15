import React from 'react';
import { map } from '@laufire/utils/collection';

const ExtraFittings = (context) => {
	const { config: { indicators, indicatorsBottom }} = context;

	return <div>
		<div className="topCarrier"/>
		<div className="luggageSection"/>
		<div className="luggageSecHandle"/>
		{(map(indicators, (indicator) =>
			<div
				key={ indicator }
				style={ {
					bottom: `${ indicatorsBottom * indicator.y }%`,
					backgroundColor: indicator.backgroundColor,
				} }
				className="indicators"
			/>))}
	</div>;
};

export default ExtraFittings;
