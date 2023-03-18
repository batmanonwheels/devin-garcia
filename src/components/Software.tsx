import SoftwareCard from './SoftwareCard';
import './styles/Software.css';

export default function Software() {
	interface Project {
		link: string;
		name: string;
		image: string;
		description: string;
		githubLink: string;
	}
	const project: Project = {
		name: 'NoteAbility',
		link: 'https://github.com/batmanonwheels/noteability',
		image:
			'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		description:
			'Noteability is a game that allows you to play a song on a virtual piano and have your friends guess the name of it!',
		githubLink: 'https://github.com/batmanonwheels/noteability',
	};

	return (
		<>
			<div className='main-component' id='software'>
				<div id='grid' className='software-grid'>
					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>
					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>
					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>

					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>

					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>
					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>

					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>
					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>
					<SoftwareCard
						link={project.link}
						name={project.name}
						image={project.image}
						description={project.description}
						githubLink={project.githubLink}
					/>
				</div>
			</div>
		</>
	);
}
