import React from 'react';
import { map, range } from '@laufire/utils/collection';

const Road = (context) => {
	const { config: { stripes: { count, x }, roadHeight }} = context;

	return (
		<div style={ { height: `${ roadHeight }%` } } className="road">
			{ map(range(0, count), (stripe) =>
				<div
					key={ stripe }
					style={ {
						right: `${ x * stripe }%`,
					} }
					className="stripes"
				/>)}</div>);
};

export default Road;
