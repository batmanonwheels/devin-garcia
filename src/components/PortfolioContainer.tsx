import { useEffect, RefObject } from 'react';
import { Project } from '../data/works';

interface PortfolioContainerProps {
	id: number;
	project: Project;
}

export default function PortfolioContainer({
	id,
	project,
}: PortfolioContainerProps) {
	return (
		<div id={`item-${id}`} className='container'>
			<h4 className='container-heading'>{project.id}</h4>
		</div>
	);
}

// if (Math.round(portfolioContainerYPos) == 0) {
// }

// get the distance between the top of the document and the top of the div element
// const divHeight: number = portfolioContainer?.scrollTop;

// if (
// 	carouselTop - divHeight / 9 >= divHeight &&
// 	copiedDivs.length < 3 &&
// 	!copiedDivs.includes(portfolioContainer)
// ) {
// 	// create a copy of the portfolio container div element
// 	const copiedDiv: Node = portfolioContainer?.cloneNode(true);

// 	copiedDivs.push(copiedDiv);
// 	// add the copied div element to the previous container div
// 	previousContainer.current?.appendChild(copiedDiv);
// } else if (carouselTop <= divHeight && copiedDivs.length > 0) {
// 	// remove the oldest copied div element from the previous container div
// 	const oldestDiv: Node | undefined = copiedDivs?.shift();
// 	previousContainer.current?.removeChild(oldestDiv);
// }
