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
		<div id={`${previousContainer ? id + ' prev' : id}`} className='container'>
			{previousContainer ? (
				<HashLink
					className='jump-to-entry'
					to={`#${id}`}
					scroll={(el) =>
						el.scrollIntoView({ behavior: 'smooth', block: 'end' })
					}
				>
					<div className='heading'>
						<h4>{name}</h4>
						<h4>{dateCreated}</h4>
					</div>
				</HashLink>
			) : (
				<>
					<div className='heading'>
						<h4>{name}</h4>
						<h4>{dateCreated}</h4>
					</div>
					<div className='content'>
						{images.length >= 2 ? (
							<div className='images'>
								{images.map((image, i) => (
									<img
										key={images.indexOf(image)}
										loading='lazy'
										className={`image`}
										alt={`photo of ${name} ${i + 1}`}
										src={image}
									/>
								))}
							</div>
						) : (
							<img
								loading='lazy'
								className={`image`}
								alt={`photo of ${name}`}
								src={images[0]}
							/>
						)}
						<div className='icons'>
							{languagesUsed.map((language, i) => (
								<i
									key={languagesUsed.indexOf(language)}
									title={language.toUpperCase()}
									className={`devicon-${language}-plain`}
								></i>
							))}
						</div>
						<h4 className='description'>{description}</h4>
					</div>
					<div className='footer'>
						<a className='footer-link' href={githubLink && githubLink}>
							<h3>github</h3>
						</a>
						<a
							className='footer-link'
							href={deployedLink ? deployedLink : undefined}
						>
							<h3>www.</h3>
						</a>
					</div>
				</>
			)}
		</div>
	);
}
