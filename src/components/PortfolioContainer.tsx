import { useEffect, RefObject } from 'react';
import { Project } from '../data/works';
import { FaGithubSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { HashLink } from 'react-router-hash-link';

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
		<div id={`${previousContainer ? id + ' prev' : id}`} className='container'>
			{previousContainer ? (
				<HashLink className='jump-to-entry' smooth to={`#${id}`}>
					<div className='container-heading'>
						<h4>{name}</h4>
						<h4>{dateCreated}</h4>
					</div>
				</HashLink>
			) : (
				<>
					<div className='container-heading'>
						<h4>{name}</h4>
						<h4>{dateCreated}</h4>
					</div>
					<a className='site-link' href={githubLink}>
						<div className='container-content'>
							{/* <h1 className='container-title'>{name.toLowerCase()}</h1> */}
							<div className='container-images'>
								<img
									// loading='lazy'
									className='container-image'
									alt={`photo of ${name}`}
									src={image}
								/>
								<img
									// loading='lazy'
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
										{/* <IconContext.Provider
											value={{
												size: '100%',
												color: '#b3c99c',
											}}
										>
											<FaGithubSquare />
										</IconContext.Provider> */}
										Github
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
