import React from 'react';
import Indicators from './Indicators';

const ExtraFittings = (context) => <div>
	<div className="topCarrier"/>
	<div className="luggageSection"/>
	<div className="luggageSecHandle"/>
	<div className="mirror"/>
	<div className="mirrorHandle"/>
	<Indicators { ...context }/>
</div>;

export default ExtraFittings;
