import NavDrawer from './NavDrawer';
import { IconContext } from 'react-icons';
import { CgMenu } from 'react-icons/cg';

interface NavBarProps {
	handleNavDrawer: () => void;
	openNavDrawer: boolean;
	setOpenNavDrawer: (bool: boolean) => void;
	isDarkMode: boolean;
	setIsDarkMode: (bool: boolean) => void;
	handleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
			</div>
			<IconContext.Provider
				value={{ size: '2rem', className: 'burger-button' }}
			>
				<CgMenu onClick={handleNavDrawer} />
			</IconContext.Provider>
		</div>
	);
}
