import { useRef, RefObject, useState } from 'react';
import PortfolioContainer from './PortfolioContainer';
import { revProjects as projects, Project } from '../data/works';

interface EventElements extends HTMLDivElement {
	target: EventTarget;
	previousContainer: Element;
	nextContainer: Element;
}

export default function Portfolio() {
	// create an array to store the copied div elements
	const [copiedProjects, setCopiedProjects] = useState<Project[]>([]);

	// const managePreviousContainer = (
	// 	target: Partial<EventElements>,
	// 	previousContainer: Partial<EventElements>,
	// 	currentIndex: number
	// ): void => {
	// 	let tempArr: Project[] = [];

	// 	if (currentIndex >= 2) {
	// 		tempArr.push(
	// 			projects[currentIndex - 2],
	// 			projects[currentIndex - 1],
	// 			projects[currentIndex]
	// 		);
	// 	} else if (currentIndex == 1) {
	// 		tempArr.push(projects[currentIndex - 1], projects[currentIndex]);
	// 	} else if (currentIndex == 0) {
	// 		tempArr.push(projects[currentIndex]);
	// 	}
	// target.children[1].children[
	// 	currentIndex + 1
	// ].children[0].children[0].style.top =
	// 	(previousContainer!.offsetHeight / 3) * previousContainer!.children.length +
	// 	'px';
	// 	// console.log(tempArr);
	// 	setCopiedProjects(tempArr);
	// };

	const handleScroll = (e: React.UIEvent<HTMLDivElement>): void => {
		const { target }: Partial<EventElements> = e;
		const previousContainer: Partial<EventElements> = e.target.children[0];
		const nextContainer: Partial<EventElements> = e.target!.children[1];

		if (target && previousContainer && nextContainer) {
			//get height of next container
			const carouselHeight: number = nextContainer?.offsetHeight;

			//get height of a previous container child
			const previousContainerDivHeight: number =
				previousContainer?.offsetHeight / 3;

			//get current y position minus height of previous container
			let scrollY: number =
				target.scrollTop -
				previousContainer.offsetHeight -
				previousContainerDivHeight * copiedProjects.length;

			//height of single portfolio container
			const portfolioContainerHeight: number =
				nextContainer.children[0].offsetHeight;

			//get index of portfolio container currently on screen
			const currentIndex =
				Math.trunc(
					(scrollY / (carouselHeight - portfolioContainerHeight * 2)) * 10
				) - 1;

			//change top attribute of each portfolio container based on how many elements are in the previous container
			target.children[1].children[
				currentIndex + 1
			].children[0].children[0].style.top =
				(previousContainer!.offsetHeight / 3) * copiedProjects.length + 'px';
			// console.log(scrollY, currentIndex, portfolioContainerHeight * 0.1);

			// const pastProjects: Project[] = projects.filter(
			// 	(project) =>
			// 		project.id <=
			// 			Math.trunc(
			// 				(scrollY / (carouselHeight - portfolioContainerHeight * 2)) * 10
			// 			) &&
			// 		project.id >=
			// 			Math.trunc(
			// 				(scrollY / (carouselHeight - portfolioContainerHeight * 2)) * 10
			// 			) -
			// 				2
			// );

			console.log(
				Math.floor(
					(scrollY / (carouselHeight - portfolioContainerHeight * 2.5)) * 10
				)
			);

			setCopiedProjects(
				projects.filter(
					(project) =>
						project.id <=
							Math.trunc(
								(scrollY / (carouselHeight - portfolioContainerHeight * 2.5)) *
									10
							) &&
						project.id >=
							Math.trunc(
								(scrollY / (carouselHeight - portfolioContainerHeight * 2.5)) *
									10
							) -
								2
				)
			);

			// //if the index is greater than or equal to 0
			// if (currentIndex >= 0) {
			// 	setCopiedProjects([]); //
			// 	// managePreviousContainer(target, previousContainer, currentIndex);
			// } else if (currentIndex <= 0 && target.childNodes[0].childNodes[0]) {
			// 	setCopiedProjects([]);
			// }
		}
	};

	return (
		<div
			onScroll={(e: React.UIEvent<HTMLDivElement>) => {
				handleScroll(e);
			}}
			className='carousel-container'
			id='portfolio'
		>
			<div className='previous-containers'>
				{copiedProjects.map((project: Project, i: number) => (
					<PortfolioContainer
						key={i}
						id={project.id}
						name={project.name}
						image={project.image}
						dateCreated={project.date_created}
						deployedLink={project.deployed_link}
						githubLink={project.github_link}
						description={project.description}
						previousContainer={true}
					/>
				))}
			</div>
			<div className='next-containers'>
				{projects.map((project: Project, i: number) => (
					<PortfolioContainer
						key={i}
						id={project.id}
						name={project.name}
						image={project.image}
						dateCreated={project.date_created}
						deployedLink={project.deployed_link}
						githubLink={project.github_link}
						description={project.description}
						previousContainer={false}
					/>
				))}
			</div>
		</div>
	);
}
