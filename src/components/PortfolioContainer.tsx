import { HashLink } from 'react-router-hash-link';

interface PortfolioContainerProps {
	id: number;
	name: string;
	images: string[];
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
	images,
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
					<div className='container-content'>
						{images.length >= 2 ? (
							<div className='container-images'>
								{images.map((image, i) => (
									<img
										key={images.indexOf(image)}
										loading='lazy'
										className={`container-image`}
										alt={`photo of ${name} ${i + 1}`}
										src={image}
									/>
								))}
							</div>
						) : (
							<img
								loading='lazy'
								className={`container-image`}
								alt={`photo of ${name}`}
								src={images[0]}
							/>
						)}
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
				</>
			)}
		</div>
	);
}
