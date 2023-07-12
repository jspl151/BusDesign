import React from 'react';

const maxHeight = 100;
const fixHeight = 4;

const Environment = (context) => {
	const { config: { roadHeight }} = context;

	return (
		<div
			style={ { height: `${ maxHeight - roadHeight + fixHeight }vh` } }
			className="environment"
		/>);
};

export default Environment;
