import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';
import busStop from './images/busStop.webp';

const App = (context) => {
	const { config: { roadTop }} = context;

	return (
		<div
			style={ {
				backgroundImage: `url(${ busStop })`,

				backgroundSize: 'contain',
				height: '800px',
			} }
			className="App"
		>
			<div style={ { top: `${ `${ roadTop }` }%` } } className="road"/>
			<Bus { ...context }/>
		</div>);
};

export default App;
