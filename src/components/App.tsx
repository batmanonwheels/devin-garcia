import './styles/App.css';
import Carousel from './Carousel';
import Nav from './Nav';
import { useState, useEffect } from 'react';
import NavDrawer from './NavDrawer';
import Texture from './Texture';

export default function App() {
	const [openNavDrawer, setOpenNavDrawer] = useState<boolean>(false);
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const [carouselContainer, setCarouselContainer] =
		useState<HTMLDivElement | null>(null);
	const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

	const handleTheme = (e: boolean): void => {
		if (isDarkMode === false) {
			setIsDarkMode(true);
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			setIsDarkMode(false);
			document.documentElement.setAttribute('data-theme', 'light');
		}
	};

	useEffect(() => {
		if (!!carouselContainer && hasScrolled === false) {
			carouselContainer!.scrollTo({
				top: 100000,
				left: 0,
				behavior: 'smooth',
			});
			setHasScrolled(true);
		}
	}, [carouselContainer]);

	const handleNavDrawer = (): void => {
		const button: Element | null = document.querySelector('.burger-button');
		if (button) {
			const currentState = button.getAttribute('data-state');

			if (!currentState || currentState === 'closed') {
				button.setAttribute('data-state', 'opened');
				button.setAttribute('aria-expanded', 'true');
			} else {
				button.setAttribute('data-state', 'closed');
				button.setAttribute('aria-expanded', 'false');
			}
			setOpenNavDrawer(!openNavDrawer);
		}
	};

	return (
		<>
			<NavDrawer
				isDarkMode={isDarkMode}
				setIsDarkMode={setIsDarkMode}
				handleTheme={handleTheme}
				handleNavDrawer={handleNavDrawer}
				openNavDrawer={openNavDrawer}
				setOpenNavDrawer={setOpenNavDrawer}
			/>
			<>
				{/* <Texture /> */}
				<Nav
					isDarkMode={isDarkMode}
					setIsDarkMode={setIsDarkMode}
					handleTheme={handleTheme}
					handleNavDrawer={handleNavDrawer}
					openNavDrawer={openNavDrawer}
					setOpenNavDrawer={setOpenNavDrawer}
				/>
				<Carousel setCarouselContainer={setCarouselContainer} />
			</>
		</>
	);
}
