import React from 'react';
import { map } from '@laufire/utils/collection';

const ExtraFittings = (context) => {
	const { config: { indicators, indicatorsBottom }} = context;

	return <div>
		<div className="topCarrier"/>
		<div className="luggageSection"/>
		<div className="luggageSecHandle"/>
		<div className="mirror"/>
		<div className="mirrorHandle"/>
		{(map(indicators, (indicator, index) =>
			<div
				key={ index }
				style={ {
					bottom: `${ indicatorsBottom * indicator.y }%`,
					backgroundColor: indicator.backgroundColor,
				} }
				className="indicators"
			/>))}
	</div>;
};

export default ExtraFittings;
