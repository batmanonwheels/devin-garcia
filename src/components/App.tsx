import './styles/App.css';
import Carousel from './Carousel';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import NavDrawer from './NavDrawer';

export default function App() {
	const [openNavDrawer, setOpenNavDrawer] = useState<boolean>(false);
	const [hasScrolled, setHasScrolled] = useState<boolean>(false);
	const [carouselContainer, setCarouselContainer] = useState(null);
	// const carouselContainer: Element | null =
	// 	document.querySelector(`#portfolio`);

	if (window.innerWidth > 850) {
		console.log('bigger');
	}

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
				handleNavDrawer={handleNavDrawer}
				openNavDrawer={openNavDrawer}
				setOpenNavDrawer={setOpenNavDrawer}
			/>
			<>
				<NavBar
					handleNavDrawer={handleNavDrawer}
					openNavDrawer={openNavDrawer}
					setOpenNavDrawer={setOpenNavDrawer}
				/>
				<Carousel setCarouselContainer={setCarouselContainer} />
			</>
		</>
	);
}
