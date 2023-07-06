import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';
import Stripes from './components/Stripes';

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
			<div style={ { height: `${ roadHeight }%` } } className="road"/>
			<Stripes { ...context }/>
			<Bus { ...context }/>
		</div>);
};

export default App;
