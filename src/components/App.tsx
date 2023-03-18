import './styles/App.css';
import Home from './Home';
import NavBar from './NavBar';
import Title from './Title';
import Software from './Software';
import Music from './Music';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
	const findPosition = () => {
		const windowHeight: number = window.outerHeight;
		const main: HTMLDivElement | null =
			document.querySelector('.main-component')!;
		const maxY: number = main!.scrollHeight;
		let currentY: number = window.pageYOffset;
		let percentOfPage: number =
			(Math.round(currentY) / Math.round(maxY - windowHeight)) * 100;
		// console.log(`${Math.round(percentOfPage)}` + '%');
		console.log();
	};

	return (
		<div className='App' onScroll={() => console.log(document.body.scrollTop)}>
			{/* <NavBar /> */}
			<Title />
			<div id='main'>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/software' element={<Software />} />
						<Route path='/music' element={<Music />} />
						<Route path='/about' element={<About />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}
