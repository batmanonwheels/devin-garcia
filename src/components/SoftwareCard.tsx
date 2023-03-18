import { AiFillGithub } from 'react-icons/ai';

type CardProps = {
	link?: string;
	name?: string;
	image?: string;
	description?: string;
	githubLink?: string;
};

export default function Card({
	link,
	name,
	image,
	description,
	githubLink,
}: CardProps) {
	return (
		<div className='card'>
			<img src={image} className='card-image' />
			{/* <div className='card-detail-container'>
				<a className='card-name' href={link}>
					<h1 className='card-name'>{name}</h1>
				</a>
				<p className='card-description'>{description}</p>
				<a className='card-link' href={githubLink}>
					<AiFillGithub href={githubLink} size={50} color={'#434343'} />
				</a>
			</div> */}
		</div>
	);
}
