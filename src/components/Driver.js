import { rndValues } from '@laufire/utils/random';
import { React } from 'react';

const Driver = (context) => {
	const { config: { driverWindowImages }} = context;

	return (
		<div

			style={ {
				right: '5%',
				backgroundImage: `url(${ process.env.PUBLIC_URL }${ rndValues(driverWindowImages, 1) })`,
			} }
			className="driver"
		/>);
};

export default Driver;
