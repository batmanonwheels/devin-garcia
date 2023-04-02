import Portfolio from './Portfolio';

export default function Carousel() {
	const carouselContainer: Element | null =
		document.querySelector(`#portfolio`);
	if (carouselContainer) {
		carouselContainer!.scrollTo({
			top: 100000,
			left: 0,
			behavior: 'smooth',
		});
	}

	return (
		<>
			{/* <div className='container-wrapper' id='portfolio'>
</div> */}
			<Portfolio />
			{/*
<div className='container-wrapper' id='contact'>
</div> */}
		</>
	);
}
