import NavDrawer from './NavDrawer';
import { IconContext } from 'react-icons';
import { CgMenu } from 'react-icons/cg';

interface NavBarProps {
	handleNavDrawer: () => void;
	openNavDrawer: boolean;
	setOpenNavDrawer: (bool: boolean) => void;
}

export default function NavBar({
	handleNavDrawer,
	openNavDrawer,
	setOpenNavDrawer,
}: NavBarProps) {
	return (
		<div className='navbar'>
			<p className='title'>devin garcia</p>
			<IconContext.Provider
				value={{ size: '2rem', className: 'burger-button-open' }}
			>
				<CgMenu onClick={handleNavDrawer} />
			</IconContext.Provider>
		</div>
	);
}
