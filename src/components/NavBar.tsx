import { IconContext } from 'react-icons';
import { CgMenu } from 'react-icons/cg';
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
		<div className='navbar'>
			<a className={`nav-item-text`} href='/about'>
				about
			</a>
			<a className={`nav-item-text`} href='/works'>
				portfolio
			</a>
			<a className={`nav-item-text`} href='/contact'>
				contact
			</a>
			<DarkModeSwitch
				className='theme-toggle'
				checked={isDarkMode}
				onChange={(e) => handleTheme(e)}
				size={30}
			/>
		</div>
	);
}
