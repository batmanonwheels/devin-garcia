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
		<div className='nav'>
			<a className='title-link' href='/'>
				<h1 className='title'>devin garcia</h1>
			</a>
			<NavBar
				isDarkMode={isDarkMode}
				setIsDarkMode={setIsDarkMode}
				handleTheme={handleTheme}
				handleNavDrawer={handleNavDrawer}
				openNavDrawer={openNavDrawer}
				setOpenNavDrawer={setOpenNavDrawer}
			/>
			<IconContext.Provider
				value={{ size: '2rem', className: 'burger-button' }}
			>
				<CgMenu onClick={handleNavDrawer} />
			</IconContext.Provider>
		</div>
	);
}
