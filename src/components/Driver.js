import { React } from 'react';

const Driver = (context) => {
	const { data } = context;

	return (
		<div

			style={ {
				right: '10%',
				backgroundImage: `url(${ process.env.PUBLIC_URL }${ data.driverImage })`,
			} }
			className="driver"
		/>);
};

export default Driver;
