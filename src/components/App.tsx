import './styles/App.css';
import { useState, useEffect } from 'react';

import Carousel from './MainContainer';
import Nav from './Nav';
import NavDrawer from './NavDrawer';
import Texture from './Texture';

export default function App() {
	const [openNavDrawer, setOpenNavDrawer] = useState<boolean>(false);
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const [carouselContainer, setCarouselContainer] =
		useState<HTMLDivElement | null>(null);

	//dark mode state and logic
	const getTheme = (): boolean => {
		let localTheme: string | null = localStorage.getItem('theme');
		let devicePreference: boolean = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		if (localTheme === null) {
			devicePreference === true
				? localStorage.setItem('theme', 'dark')
				: localStorage.setItem('theme', 'light');
		}
		return localTheme === 'dark' ? true : false;
	};
	const [isDarkMode, setIsDarkMode] = useState<boolean>(getTheme());

	isDarkMode === true
		? document.documentElement.setAttribute('data-theme', 'dark')
		: document.documentElement.setAttribute('data-theme', 'light');

	const handleTheme = (e: boolean): void => {
		if (isDarkMode === false) {
			setIsDarkMode(true);
			document.documentElement.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		} else {
			setIsDarkMode(false);
			document.documentElement.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		}
	};

	//auto scroll on carousel load
	useEffect(() => {
		if (!!carouselContainer && hasScrolled === false) {
			carouselContainer!.scrollTo({
				top: 10000,
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
			<div id='main'>
				<Nav
					isDarkMode={isDarkMode}
					setIsDarkMode={setIsDarkMode}
					handleTheme={handleTheme}
					handleNavDrawer={handleNavDrawer}
					openNavDrawer={openNavDrawer}
					setOpenNavDrawer={setOpenNavDrawer}
				/>
				<Carousel setCarouselContainer={setCarouselContainer} />
			</div>
		</>
	);
}
