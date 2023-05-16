import { useRef, RefObject, useState } from 'react';
import PortfolioContainer from './PortfolioContainer';
import { revProjects as projects, Project } from '../data/works';
import './styles/Portfolio.css';

interface PortfolioContainerProps {
	setCarouselContainer: (carouselContainer: HTMLDivElement | null) => void;
}

export default function Portfolio({
	setCarouselContainer,
}: PortfolioContainerProps) {
	// create an array to store the copied div elements
	const [copiedProjects, setCopiedProjects] = useState<Project[]>([]);

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

			//get index of portfolio container currently on screen
			const currentIndex =
				Math.trunc(
					(scrollY + currentStickyContainerHeight) / singleContainerHeight
				) + 1;

			if (scrollY >= stickyContainerDivHeight) {
				setCopiedProjects(
					projects.filter(
						(project) =>
							project.id <= currentIndex - 1 && project.id >= currentIndex - 3
					)
				);
			} else {
				setCopiedProjects([]);
			}

			// change top attribute of each portfolio container based on how many elements are in the sticky container
			let currentContainerHeading: HTMLElement = target.children[1].children[
				currentIndex - 1
			].children[0] as HTMLElement;

			currentContainerHeading.style.top = currentStickyContainerHeight + 'px';
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
						image={project.image}
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
						image={project.image}
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
