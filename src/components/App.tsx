import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import Title from './Title';

export default function App() {
	return (
		<div className='App'>
			<NavBar />
			<Title />
			<Home />
		</div>
	);
}
