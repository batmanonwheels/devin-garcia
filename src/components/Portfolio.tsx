import { useRef, RefObject, useState } from 'react';
import PortfolioContainer from './PortfolioContainer';
import { projects, Project } from '../data/works';

export default function Portfolio() {
	// create an array to store the copied div elements
	const [copiedDivs, setCopiedDivs] = useState<Object[]>([]);

	const carouselContainer: Element | null =
		document.querySelector(`#portfolio`);

	const portfolioContainers: NodeListOf<Element> =
		document.querySelectorAll(`.container`);

	// const managePreviousContainer = (
	// 	e,
	// 	currentIndex: number,
	// 	scrollY: number,
	// 	portfolioContainerHeight: number
	// ): void => {
	// if (e.target.childNodes[0].childNodes.length >= 3) {
	// 	e.target.childNodes[0].removeChild(e.target.childNodes[0].childNodes[0]);
	// }
	// if (e.target.childNodes[0].childNodes[0]) {
	// 	e.target.childNodes[0].removeChild(e.target.childNodes[0].childNodes[0]);
	// } else if (e.target.childNodes[0].childNodes[1]) {
	// 	e.target.childNodes[0].removeChild(e.target.childNodes[0].childNodes[1]);
	// } else if (e.target.childNodes[0].childNodes[2]) {
	// 	e.target.childNodes[0].removeChild(e.target.childNodes[0].childNodes[2]);
	// }

	// if (
	// 	 &&
	// 	!e.target.childNodes[0].contains(
	// 		e.target.childNodes[1].childNodes[currentIndex]
	// 	)
	// ) {
	// 	console.log(1, currentIndex);
	// 	e.target.childNodes[0].appendChild(
	// 		e.target.childNodes[1].childNodes[currentIndex]?.cloneNode(true)
	// 	);
	// } else if (
	// 	currentIndex - 1 >= 0 &&
	// 	!e.target.childNodes[0].contains(
	// 		e.target.childNodes[1].childNodes[currentIndex - 1]
	// 	)
	// ) {
	// 	console.log(2, currentIndex);
	// 	e.target.childNodes[0].appendChild(
	// 		e.target.childNodes[1].childNodes[currentIndex - 1]?.cloneNode(true)
	// 	);
	// } else if (
	// 	currentIndex - 2 >= 0 &&
	// 	!e.target.childNodes[0].contains(
	// 		e.target.childNodes[1].childNodes[currentIndex - 2]
	// 	)
	// ) {
	// 	console.log(3, currentIndex);
	// 	e.target.childNodes[0].appendChild(
	// 		e.target.childNodes[1].childNodes[currentIndex - 2]?.cloneNode(true)
	// 	);
	// }
	// };
	// console.log(copiedDivs);

	const managePreviousContainer = (
		e,
		currentIndex: number,
		scrollY: number,
		portfolioContainerHeight: number
	): void => {
		setCopiedDivs([]);
		let tempArr: Object[] = [];

		// if (tempArr.length >= 3) {
		// 	tempArr.pop();
		// }

		if (currentIndex >= 2) {
			tempArr.push(
				projects[currentIndex - 2],
				projects[currentIndex - 1],
				projects[currentIndex]
			);
		} else if (currentIndex == 1) {
			tempArr.push(projects[currentIndex - 1], projects[currentIndex]);
		} else if (currentIndex == 0) {
			tempArr.push(projects[currentIndex]);
		}

		console.log(copiedDivs, tempArr);

		setCopiedDivs(tempArr);
	};

	const handleScroll = (e): void => {
		//get height of next container
		const carouselHeight: number = e.target.children[1].offsetHeight;

		//get height of a previous container child
		const previousContainerDivHeight: number =
			e.target.children[0].offsetHeight / 3;

		//get current y position minus height of previous container
		let scrollY: number =
			e.target.scrollTop -
			e.target.children[0].offsetHeight +
			previousContainerDivHeight +
			previousContainerDivHeight * e.target.children[0].children.length;

		//get index of portfolio container currently on screen
		const currentIndex = Math.trunc((scrollY / carouselHeight) * 10) - 1;

		//height of single portfolio container
		const portfolioContainerHeight: number =
			e.target.children[1].children[0].offsetHeight;

		//if the index is greater than or equal to 0, invoke function & change top attribute of each portfolio container
		if (currentIndex >= 0) {
			managePreviousContainer(
				e,
				currentIndex,
				scrollY,
				portfolioContainerHeight
			);
			e.target.children[1].children[currentIndex + 1].style.top =
				(e.target.children[0].offsetHeight / 3) *
					e.target.children[0].children.length +
				'px';

			e.target.children[0].children[currentIndex + 1].children[0].style.top =
				10 + '%';
		} else if (currentIndex <= 0 && e.target.childNodes[0].childNodes[0]) {
			e.target.childNodes[0].removeChild(e.target.childNodes[0].childNodes[0]);
		}
	};

	return (
		<div
			onScroll={(e) => {
				handleScroll(e);
			}}
			className='carousel-container'
			id='portfolio'
		>
			<div className='previous-containers'>
				{copiedDivs.map((project: Object, i: number) => (
					<PortfolioContainer key={i} id={i} project={project} />
				))}
			</div>
			<div className='next-containers'>
				{projects.reverse().map((project: Object, i: number) => (
					<PortfolioContainer key={i} id={i} project={project} />
				))}
			</div>
		</div>
	);
}
