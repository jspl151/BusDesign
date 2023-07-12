import React from 'react';

const Driver = ({ data }) =>
	<div
		style={ {
			backgroundImage: `url(${ process.env.PUBLIC_URL }${ data.driverImage })`,
		} }
		className="driver"
	/>;

export default Driver;
