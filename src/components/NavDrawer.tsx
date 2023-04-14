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
		<>
			{openNavDrawer ? (
				<div className='nav-drawer-transparent' onClick={handleNavDrawer}></div>
			) : null}
			<div className={`nav-drawer${openNavDrawer ? ' show' : ''}`}>
				<ul className={`nav-list${openNavDrawer ? '' : ' hide'}`}>
					<li className={`nav-item${openNavDrawer ? '' : ' hide'}`}>
						<a href='/'>
							<h4 className={`nav-item-text${openNavDrawer ? '' : ' hide'}`}>
								HOME
							</h4>
						</a>
					</li>
					<li className={`nav-item${openNavDrawer ? '' : ' hide'}`}>
						<a href='/works'>
							<h4 className={`nav-item-text${openNavDrawer ? '' : ' hide'}`}>
								PORTFOLIO
							</h4>
						</a>
					</li>
					<li className={`nav-item${openNavDrawer ? '' : ' hide'}`}>
						<a href='/contact'>
							<h4 className={`nav-item-text${openNavDrawer ? '' : ' hide'}`}>
								CONTACT
							</h4>
						</a>
					</li>
					<li className={`nav-item${openNavDrawer ? '' : ' hide'}`}>
						<DarkModeSwitch
							// style={{ color: 'var(--primary-color)' }}
							className='theme-toggle'
							checked={isDarkMode}
							onChange={(e) => handleTheme(e)}
							size={300}
						/>
					</li>
				</ul>
			</div>
		</>
	);
}
