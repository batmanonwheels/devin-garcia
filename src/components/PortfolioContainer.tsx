import { useEffect, RefObject } from 'react';
import { Project } from '../data/works';

interface PortfolioContainerProps {
	id: number;
	name: string;
	image: string;
	dateCreated: string;
	deployedLink?: string;
	githubLink: string;
	description: string;
	previousContainer: boolean;
}

export default function PortfolioContainer({
	id,
	name,
	image,
	dateCreated,
	deployedLink,
	githubLink,
	description,
	previousContainer,
}: PortfolioContainerProps) {
	return (
		<div id={`${id}`} className='container'>
			{previousContainer ? (
				<a className='jump-to-entry' href={`#${id}`}>
					<div className='container-heading'>
						<h4>{name}</h4>
						<h4>{dateCreated}</h4>
					</div>
				</a>
			) : (
				<>
					<a className='site-link' href={githubLink}>
						<div className='container-heading'>
							<h4>{name}</h4>
							<h4>{dateCreated}</h4>
						</div>
						<div className='container-content'>
							{/* <img
								className='container-image'
								alt={`photo of ${name}`}
								src={image}
							/> */}

							<div className='container-info'>
								<p className='container-description'>{description}</p>
								<div className='container-buttons'>
									<button className='github-link'>GitHub Repo</button>
									<button className='github-link'>Deployed Site</button>
								</div>
							</div>
						</div>
					</a>
				</>
			)}
		</div>
	);
}
