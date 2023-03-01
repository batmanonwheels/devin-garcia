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
			<div className='card-image-container'>
				<img src={project.image} className='card-image' />
			</div>
			<div className='card-detail-container'>
				<a className='card-name' href={project.link}>
					<h1 className='card-name'>{project.name}</h1>
				</a>
				<p className='card-description'>{project.description}</p>
				<a className='card-link' href={project.githubLink}>
					<AiFillGithub href={project.githubLink} size={50} color={'#434343'} />
				</a>
			</div>
		</div>
	);
}
