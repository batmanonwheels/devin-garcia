import { useState } from 'react';
import PortfolioContainer from './PortfolioContainer';
import { revProjects as projects, Project } from '../data/works';
import './styles/Portfolio.css';

interface PortfolioProps {
	setCarouselContainer: (carouselContainer: HTMLDivElement | null) => void;
}

export default function Portfolio({ setCarouselContainer }: PortfolioProps) {
	// create an array to store the copied div elements
	const [copiedProjects, setCopiedProjects] = useState<Project[]>([]);
	let lastScrollY: number = 0;

	const handleScroll = (target: HTMLElement): void => {
		const stickyContainer: HTMLElement = target.children[0] as HTMLElement;
		const mainContainer: HTMLElement = target.children[1] as HTMLElement;

		if (stickyContainer && mainContainer) {
			//get height of main container
			const carouselHeight: number | undefined = mainContainer.offsetHeight;

			//get height of a sticky container child
			const stickyContainerDivHeight: number = stickyContainer.offsetHeight / 3;

			//get the number of elements in the sticky container
			const stickyContainerDivCount: number = stickyContainer.children.length;

			//get current height of sticky container
			const currentStickyContainerHeight: number =
				stickyContainerDivHeight * stickyContainerDivCount;

			//get current y position minus height of sticky container
			let scrollY: number =
				target.scrollTop -
				stickyContainer.offsetHeight -
				stickyContainerDivHeight * copiedProjects.length;

			//grab a single portfolio container
			const singleContainer: HTMLElement = mainContainer
				.children[0] as HTMLElement;

			//height of single portfolio container
			const singleContainerHeight: number = singleContainer.offsetHeight;

			//get index of portfolio container currently on screen by adding the current scroll height to double the current sticky container height in order to have it update when the bottom of the portfolio container intersects bottom border of the bottommost element in the sticky container div
			const currentIndex =
				Math.trunc(
					(scrollY + currentStickyContainerHeight * 2) / singleContainerHeight
				) + 1;

			//get the heading of the current
			let currentContainerHeading: HTMLElement = target.children[1].children[
				currentIndex - 1
			].children[0] as HTMLElement;

			if (scrollY >= stickyContainerDivHeight) {
				//if the current scroll height is greater than the current sticky container height, set the copiedProjects array to the 3 containers above the one currently on screen
				setCopiedProjects(
					projects.filter(
						(project) =>
							project.id <= currentIndex - 1 && project.id >= currentIndex - 3
					)
				);
				// change top attribute of each portfolio container based on how many elements are in the sticky container
				currentContainerHeading.style.top = currentStickyContainerHeight + 'px';
			} else {
				//if the current scroll height is greater than the current sticky container height should mean that the user is at the top of the carousel, so empty the copiedProjects array
				setCopiedProjects([]);
			}
		}
	};

	return (
		<div
			onScroll={(e: React.UIEvent<HTMLDivElement>) => {
				handleScroll(e.target as HTMLElement);
			}}
			className='carousel-container'
			id='portfolio'
			ref={(node) => setCarouselContainer(node)}
		>
			<div className='previous-containers'>
				{copiedProjects.map((project: Project, i: number) => (
					<PortfolioContainer
						key={i}
						id={project.id}
						name={project.name}
						images={project.images}
						dateCreated={project.date_created}
						deployedLink={project.deployed_link}
						languagesUsed={project.languages_used}
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
						images={project.images}
						dateCreated={project.date_created}
						deployedLink={project.deployed_link}
						languagesUsed={project.languages_used}
						githubLink={project.github_link}
						description={project.description}
						previousContainer={false}
					/>
				))}
			</div>
		</div>
	);
}
