import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';

const App = (context) => <div className="App">
	<div className="road"/>
	<Bus { ...context }/>
</div>;

export default App;
