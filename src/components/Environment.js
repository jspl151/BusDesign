import React from 'react';

const Environment = (context) => {
	const { config: { roadHeight, maxBackgroundHeight }} = context;

	return (
		<div
			style={ { height: `${ maxBackgroundHeight - roadHeight }vh` } }
			className="environment"
		/>);
};

export default Environment;
