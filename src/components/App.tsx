import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Children, useEffect, useState } from 'react';

export default function App() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [previousContent, setPrevousContent] = useState([]);

	useEffect(() => {
		const element: Element | null = document.querySelector(
			'.container-carousel'
		);
		if (element)
			element.scrollTo({
				top: document.querySelector('.next-containers')?.offsetHeight,
				left: 0,
				behavior: 'smooth',
			});
		setScrollPosition(document.querySelector('.next-containers')?.offsetHeight);
	}, []);

	const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
		//get project carousel
		const projectCarousel = document.querySelector('.container-carousel');

		//grab previous container div
		const previousDiv: HTMLCollection | undefined = document.querySelector(
			'.previous-containers'
		)?.children;

		//grab next container div
		const nextDiv: HTMLElement | null =
			document.querySelector('.next-containers');

		//get height of next container
		const nextDivHeight: number | undefined = nextDiv?.offsetHeight;
		setScrollPosition(nextDivHeight!);

		//grab all portfolio containers
		const currentContainers: HTMLCollection | undefined = nextDiv?.children;

		//get number of projects in the 'next' container
		const projectCount: number | undefined = nextDiv?.children.length;

		//get height of project container
		const projectHeight: number | undefined =
			currentContainers![0].scrollHeight;

		// console.log(nextDivHeight, projectHeight, projectCount);

		// console.log(
		// 	nextDivHeight,
		// 	projectCarousel!.scrollTop,
		// 	document.querySelector('.previous-containers')!.offsetHeight
		// );

		// console.log(nextDivHeight - projectHeight * projectCount);

		//iterate through elements in the current container
		for (let i = 0; i < currentContainers!.length - 1; i++) {
			//change top attribute for current container based on how many containers are in the 'previous' container
			currentContainers![i].children[0].style.top =
				previousDiv.length * 5 + 1 + '%';
		}
		setScrollPosition(nextDiv!.offsetHeight);
	};

	return (
		<>
			<p id='title'>devin garcia</p>
			{/* <div className='container-wrapper' id='portfolio'>
			</div> */}
			<div
				className='container-carousel'
				id='portfolio'
				onScroll={(e) => handleScroll(e)}
			>
				<div className='previous-containers'></div>
				<div className='next-containers'>
					<div className='container'>
						<h4 className='container-heading'>hey</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
					<div className='container'>
						<h4 className='container-heading'>hi</h4>
					</div>
				</div>
			</div>
			{/*
			<div className='container-wrapper' id='contact'>
			</div> */}
		</>
	);
}
