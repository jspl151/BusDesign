import { React } from 'react';
import './App.scss';
import { rndBetween } from '@laufire/utils/lib';
const min = 40;
const max = 60;
const dif = 20;
const positionRoadTop = 58;
const width = rndBetween(min, max);

const App = () => <div className="App">
	<div className="road"/>
	<div
		style={ {
			width: `${ width }%`,
			height: `${ width - dif }%`,
			top: `${ positionRoadTop - (width - dif) }%`,
		} }
		className="bus"
	>
		<div className="window"/>
		<div className="window1"/>
		<div className="cover"/>
		<div className="tire"/>
	</div>
</div>;

export default App;
