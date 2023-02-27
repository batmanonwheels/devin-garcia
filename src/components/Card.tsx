import { AiFillGithub } from 'react-icons/ai';

export default function Card({ project }: { project: Project }) {
	interface Project {
		link: String;
		name: String;
		image: String;
		description: String;
		githubLink: String;
	}

	const showFullCard = (e: React.MouseEvent | null) => {
		console.log('mouse');
	};

	return (
		<div className='card'>
			<div
				className='card-image-container'
				onClick={(e) => console.log(showFullCard(e))}
			>
				<img className='card-image' src={project.image} />
			</div>
			<div className='card-detail-container'>
				<a href={project.link}>
					<h1>{project.name}</h1>
				</a>
				<p className='card-description'>{project.description}</p>
				<AiFillGithub
					href={project.githubLink}
					className='card-link'
					size={50}
					color={'#434343'}
				/>
			</div>
		</div>
	);
}
