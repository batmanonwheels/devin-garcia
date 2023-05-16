import { DarkModeSwitch } from 'react-toggle-dark-mode';
import './styles/Nav.css';

interface NavDrawerProps {
	handleNavDrawer: () => void;
	openNavDrawer: boolean;
	setOpenNavDrawer: (bool: boolean) => void;
	isDarkMode: boolean;
	setIsDarkMode: (bool: boolean) => void;
	handleTheme: (e: boolean) => void;
}

export default function NavDrawer({
	setOpenNavDrawer,
	handleNavDrawer,
	openNavDrawer,
	isDarkMode,
	setIsDarkMode,
	handleTheme,
}: NavDrawerProps) {
	return (
		<div
			className={`nav-drawer${openNavDrawer ? ' show' : ''}`}
			onClick={handleNavDrawer}
		>
			<ul className='nav-drawer-list'>
				<li className='drawer-item'>
					<a href='/home' className='drawer-link'>
						home
					</a>
				</li>
				<li className='drawer-item'>
					<a href='/works' className='drawer-link'>
						works
					</a>
				</li>
				<li className='drawer-item'>
					<a href='/contact' className='drawer-link'>
						contact
					</a>
				</li>
				<li className='drawer-item'>
					<DarkModeSwitch
						className='theme-toggle'
						checked={isDarkMode}
						onChange={(e) => handleTheme(e)}
						size={60}
					/>
				</li>
			</ul>
		</div>
	);
}

{
	/* {openNavDrawer ? (
				<div
					className='nav-drawer nav-drawer-transparent'

				></div>
			) : null}
			<div className={`nav-drawer${openNavDrawer ? ' show' : ''}`}>
				<ul className={`nav-drawer nav-list`}>
					<li className={`nav-drawer nav-item`}>
						<a href='/works'>
							<h4 className={`nav-drawer nav-item-text`}>works</h4>
						</a>
					</li>
					<li className={`nav-drawer nav-item`}>
						<a href='/contact'>
							<h4 className={`nav-drawer nav-item-text`}>contact</h4>
						</a>
					</li>
					<li className={`nav-drawer nav-item-text`}>
						<DarkModeSwitch
							className='theme-toggle'
							checked={isDarkMode}
							onChange={(e) => handleTheme(e)}
							size={30}
						/>
					</li>
				</ul>
			</div> */
}
