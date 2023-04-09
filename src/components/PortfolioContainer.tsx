import { useEffect, RefObject } from 'react';
import { Project } from '../data/works';
import { FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';

interface PortfolioContainerProps {
	id: number;
	name: string;
	image: string;
	dateCreated: string;
	deployedLink?: string;
	languagesUsed: string[];
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
	languagesUsed,
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
					<div className='container-heading'>
						<h4>{name}</h4>
						<h4>{dateCreated}</h4>
					</div>
					<a className='site-link' href={githubLink}>
						<div className='container-content'>
							<div className='container-images'>
								<img
									className='container-image'
									alt={`photo of ${name}`}
									src={image}
								/>
								<img
									className='container-image'
									alt={`photo of ${name} 2`}
									src={image}
								/>
							</div>

							<div className='container-info'>
								<p className='container-description'>{description}</p>
								<div className='container-icons'>
									{languagesUsed.map((language, i) => (
										<i
											key={i}
											title={language.toUpperCase()}
											className={`devicon-${language}-plain`}
										></i>
									))}
								</div>
								<div className='container-buttons'>
									<button className='github-link'>
										<IconContext.Provider
											value={{
												size: '100%',
												color: '#b3c99c',
											}}
										>
											<FaGithubSquare />
										</IconContext.Provider>
										Repo
									</button>

									<button className='github-link'>Check It Out</button>
								</div>
							</div>
						</div>
					</a>
				</>
			)}
		</div>
	);
}
