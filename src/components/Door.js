import { map, range } from '@laufire/utils/collection';
import { React } from 'react';

const Door = (context) => {
	const { config: { doorPanelCount, doorPanelRight }} = context;

	return <div>
		{(map(range(0, doorPanelCount), (door, key) =>
			<div
				key={ door }
				style={ {
					right: `${ doorPanelRight * (key + 1) }%`,
				} }
				className="door"
			>
				<div className="doorFrame"/>
			</div>))}
	</div>;
};

export default Door;
