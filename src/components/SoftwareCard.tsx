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
	const handleHover = (e: Event) => {
		// console.log(e.target);
		// if (e.type === 'mouseenter' || e.type === 'mouseover') {
		setTimeout(() => {
			const ele: Element = e.target;
			ele!.classList.toggle('hiding');
		}, 500);
	};
	return (
		<div className='card' onMouseLeave={(e) => handleHover(e)}>
			<img
				src={image}
				className='card-image'
				onMouseEnter={(e) => handleHover(e)}
			/>
			<div className='card-detail-container'>
				<a className='card-name' href={link}>
					<h1 className='card-name'>{name}</h1>
				</a>
				<p className='card-description'>{description}</p>
				<a className='card-link' href={githubLink}>
					<AiFillGithub href={githubLink} size={50} color={'#434343'} />
				</a>
			</div>
		</div>
	);
}
