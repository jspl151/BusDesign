import { map, range } from '@laufire/utils/collection';
import { React } from 'react';

const mid = 2;

const Road = (context) => {
	const { config: { stripesCount, stripeRight, roadHeight }} = context;

	return <div>
		<div style={ { height: `${ roadHeight }%` } } className="road"/>
		{map(range(0, stripesCount), (stripe) =>
			<div
				key={ stripe }
				style={ {
					right: `${ stripeRight * stripe }%`,
					bottom: `${ roadHeight / mid }%`,
				} }
				className="stripes"
			/>)}
	</div>;
};

export default Road;