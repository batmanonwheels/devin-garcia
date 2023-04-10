import { IconContext } from 'react-icons';
import { CgClose } from 'react-icons/cg';

interface NavDrawerProps {
	handleNavDrawer: () => void;
	openNavDrawer: boolean;
	setOpenNavDrawer: (bool: boolean) => void;
}

export default function NavDrawer({
	setOpenNavDrawer,
	handleNavDrawer,
	openNavDrawer,
}: NavDrawerProps) {
	return (
		<>
			{openNavDrawer ? (
				<div className='nav-drawer-transparent' onClick={handleNavDrawer}></div>
			) : null}

			<div className={`nav-drawer${openNavDrawer ? ' show' : ''}`}>
				{/* <IconContext.Provider
					value={{
						size: '2rem',
						className: `burger-button-close${openNavDrawer ? ' slide' : ''}`,
					}}
				>
					<CgClose onClick={handleNavDrawer} />
				</IconContext.Provider> */}
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
				</ul>
			</div>
		</>
	);
}
