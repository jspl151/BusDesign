import { React } from 'react';
import './App.scss';

const App = (context) => {
	const { config: { width, dif, roadTopPosition }} = context;

	return <div className="App">
		<div className="road"/>
		<div
			style={ {
				width: `${ width }%`,
				height: `${ width - dif }%`,
				top: `${ roadTopPosition - (width - dif) }%`,
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
