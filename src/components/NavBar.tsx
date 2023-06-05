import './styles/Nav.css';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

interface NavBarProps {
	handleNavDrawer: () => void;
	openNavDrawer: boolean;
	setOpenNavDrawer: (bool: boolean) => void;
	isDarkMode: boolean;
	setIsDarkMode: (bool: boolean) => void;
	handleTheme: (e: boolean) => void;
}

export default function NavBar({
	handleNavDrawer,
	openNavDrawer,
	setOpenNavDrawer,
	isDarkMode,
	setIsDarkMode,
	handleTheme,
}: NavBarProps) {
	return (
		<>
			<a className={`navbar nav-item-text`} href='/works'>
				works
			</a>
			<a className={`navbar nav-item-text`} href='/contact'>
				contact
			</a>
			<DarkModeSwitch
				className='navbar theme-toggle'
				checked={isDarkMode}
				onChange={(e) => handleTheme(e)}
				size={40}
			/>
		</>
	);
}
