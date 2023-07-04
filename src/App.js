import { React } from 'react';
import './App.scss';

const App = (context) => {
	const { config: { busWidth, dif, roadTop }} = context;

	return <div className="App">
		<div className="road"/>
		<div
			style={ {
				width: `${ busWidth }%`,
				height: `${ busWidth - dif }%`,
				top: `${ roadTop - (busWidth - dif) }%`,
			} }
			className="bus"
		>
			<div className="window"/>
			<div className="window1"/>
			<div className="cover"/>
			<div className="tire"/>
		</div>
	</div>;
};

export default App;
