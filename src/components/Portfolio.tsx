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
		const previousContainer: HTMLElement = target.children[0] as HTMLElement;
		const nextContainer: HTMLElement = target.children[1] as HTMLElement;

		if (target && previousContainer && nextContainer) {
			//get height of next container
			const carouselHeight: number | undefined = nextContainer?.offsetHeight;

			//get height of a previous container child
			const previousContainerDivHeight: number =
				previousContainer?.offsetHeight / 3;

			//get current y position minus height of previous container
			let scrollY: number =
				target.scrollTop -
				previousContainer.offsetHeight -
				previousContainerDivHeight * copiedProjects.length;

			//grab a single portfolio container
			const singleContainer: HTMLElement = nextContainer
				.children[0] as HTMLElement;

			//height of single portfolio container
			const singleContainerHeight: number = singleContainer.offsetHeight;

			//get index of portfolio container currently on screen
			const currentIndex =
				Math.trunc(
					(scrollY / (carouselHeight! - singleContainerHeight * 2)) * 10
				) - 1;

			setCopiedProjects(
				projects.filter(
					(project) =>
						project.id <=
							Math.trunc(
								(scrollY / (carouselHeight! - singleContainerHeight * 2.5)) * 10
							) &&
						project.id >=
							Math.trunc(
								(scrollY / (carouselHeight! - singleContainerHeight * 2.5)) * 10
							) -
								2
				)
			);

			//change top attribute of each portfolio container based on how many elements are in the previous container
			// let currentContainer: HTMLElement = target.children[1].children[
			// 	currentIndex + 1
			// ].children[0] as HTMLElement;
			// console.log(currentContainer.style.top);

			// if (currentIndex >= 2) {
			// 	currentContainer.style.top = '15%';
			// } else if (currentIndex < 2 && currentIndex <= 0) {
			// 	currentContainer.style.top =
			// 		5 * previousContainer!.children.length + '%';
			// }
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
