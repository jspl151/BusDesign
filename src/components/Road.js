import React from 'react';
import { map, range } from '@laufire/utils/collection';

const Road = (context) => {
	const { config: { stripesCount, stripeRight, roadHeight }} = context;

	return (
		<div style={ { height: `${ roadHeight }%` } } className="road">
			{ map(range(0, stripesCount), (stripe) =>
				<div
					key={ stripe }
					style={ {
						right: `${ stripeRight * stripe }%`,
					} }
					className="stripes"
				/>)}</div>);
};

export default Road;
