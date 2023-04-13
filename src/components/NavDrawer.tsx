import { useState } from 'react';
import { IconContext } from 'react-icons';
import { CgClose } from 'react-icons/cg';

interface NavDrawerProps {
	handleNavDrawer: () => void;
	openNavDrawer: boolean;
	setOpenNavDrawer: (bool: boolean) => void;
	isDarkMode: boolean;
	setIsDarkMode: (bool: boolean) => void;
	handleTheme: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
					<li
						className={`nav-item${openNavDrawer ? '' : ' hide'} color-toggle`}
					>
						<h5>L</h5>
						<label className='switch'>
							<input type='checkbox' onChange={(e) => handleTheme(e)} />
							<span className='slider'></span>
						</label>
						<h5>D</h5>
					</li>
				</ul>
			</div>
		</>
	);
}
