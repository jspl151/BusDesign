import { React } from 'react';
import './App.scss';
import BusStop from './components/BusStop';
import Road from './components/Road';

const maxHeight = 100;
const fixHeight = 4;

const App = (context) => {
	const { config: { roadHeight }} = context;

	return (
		<div
			style={ {
				backgroundImage: `url(${ process.env.PUBLIC_URL }./images/busStop.webp)`,
				backgroundSize: 'contain',
				height: `${ maxHeight - roadHeight + fixHeight }vh`,
			} }
			className="App"
		>
			<Road { ...context }/>
			<BusStop { ...context }/>
		</div>);
};

export default App;
