import React from 'react';
import './App.scss';
import Road from './components/Road';
import Environment from './components/Environment.js';
import Buses from './components/Buses';

const App = (context) => <div>
	<Environment { ...context }/>
	<Road { ...context }/>
	<Buses { ...context }/>
</div>;

export default App;
