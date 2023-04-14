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
		<div className='nav'>
			<p className='title'>devin garcia</p>

			<div className='navbar'>
				<a className={`nav-item-text${openNavDrawer ? '' : ' hide'}`} href='/'>
					home
				</a>
				<a
					className={`nav-item-text${openNavDrawer ? '' : ' hide'}`}
					href='/about'
				>
					about
				</a>

				<a
					className={`nav-item-text${openNavDrawer ? '' : ' hide'}`}
					href='/works'
				>
					portfolio
				</a>

				<a
					className={`nav-item-text${openNavDrawer ? '' : ' hide'}`}
					href='/contact'
				>
					contact
				</a>

				<DarkModeSwitch
					// style={{ marginBottom: '2rem' }}
					className='theme-toggle'
					checked={isDarkMode}
					onChange={(e) => handleTheme(e)}
					size={35}
				/>
			</div>

			<IconContext.Provider
				value={{ size: '2rem', className: 'burger-button' }}
			>
				<CgMenu onClick={handleNavDrawer} />
			</IconContext.Provider>
		</div>
	);
}
