import { IconContext } from 'react-icons';
import { CgMenu } from 'react-icons/cg';
import './styles/Nav.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import NavBar from './NavBar';

interface NavProps {
	handleNavDrawer: () => void;
	openNavDrawer: boolean;
	setOpenNavDrawer: (bool: boolean) => void;
	isDarkMode: boolean;
	setIsDarkMode: (bool: boolean) => void;
	handleTheme: (e: boolean) => void;
}

export default function Nav({
	handleNavDrawer,
	openNavDrawer,
	setOpenNavDrawer,
	isDarkMode,
	setIsDarkMode,
	handleTheme,
}: NavProps) {
	return (
		<header className='nav'>
			<a className='title-link' href='/'>
				<h1 className='title'>
					{'devin garcia'.split('').map((l, i) => (
						<span key={l + i} className='title-letter'>
							{l}
						</span>
					))}
				</h1>
			</a>
			<NavBar
				isDarkMode={isDarkMode}
				setIsDarkMode={setIsDarkMode}
				handleTheme={handleTheme}
				handleNavDrawer={handleNavDrawer}
				openNavDrawer={openNavDrawer}
				setOpenNavDrawer={setOpenNavDrawer}
			/>

			<button
				className='burger-button'
				aria-controls='primary-navigation'
				aria-expanded='false'
				onClick={() => handleNavDrawer()}
			>
				<svg
					stroke='var(--accent-color)'
					fill='none'
					className='hamburger'
					viewBox='10 10 100 100'
					width='3rem'
				>
					<path
						className='line'
						strokeWidth='5'
						strokeLinecap='round'
						strokeLinejoin='round'
						d='m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70'
					></path>
				</svg>
			</button>
		</header>
	);
}
