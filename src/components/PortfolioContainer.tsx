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
		<div
			id={`${previousContainer ? id + ' prev' : id}`}
			className='container-item'
		>
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
					{/* <a className='site-link' href={githubLink}> */}
					<div className='container-content'>
						<div className='container-images'>
							<img
								// loading='lazy'
								className='container-image'
								alt={`photo of ${name}`}
								src={image}
							/>
							<img
								loading='lazy'
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
										key={languagesUsed.indexOf(language)}
										title={language.toUpperCase()}
										className={`devicon-${language}-plain`}
									></i>
								))}
							</div>
							<div className='container-buttons'>
								<button className='github-link'>Github</button>

								<button className='github-link'>Visit</button>
							</div>
						</div>
					</div>
					{/* </a> */}
				</>
			)}
		</div>
	);
}
