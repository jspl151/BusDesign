import React from 'react';
import { map } from '@laufire/utils/collection';
import { peek } from '@laufire/utils/debug';

const ExtraFittings = (context) => {
	const { config: { indicators, indicatorsBottom }} = context;

	return <div>
		<div className="topCarrier"/>
		<div className="luggageSection"/>
		<div className="luggageSecHandle"/>
		{(map(indicators, (indicator) => {
			peek(indicator);
			return (
				<div
					key={ indicator }
					style={ {
						bottom: `${ indicatorsBottom * indicator.y }%`,
						backgroundColor: indicator.backgroundColor,
					} }
					className="indicators"
				/>);
		}))}
	</div>;
};

export default ExtraFittings;
