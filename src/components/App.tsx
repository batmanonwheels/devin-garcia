import './styles/App.css';
import Carousel from './Carousel';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import NavDrawer from './NavDrawer';

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
		console.log(document.documentElement);
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
		setOpenNavDrawer(!openNavDrawer);
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
				<NavBar
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
