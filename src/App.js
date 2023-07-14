import React from 'react';
import './App.scss';
import BusStop from './components/Buses';
import Road from './components/Road';
import Environment from './components/Environment.js';

const App = (context) => <div>
	<Environment { ...context }/>
	<Road { ...context }/>
	<BusStop { ...context }/>
</div>;

export default App;
