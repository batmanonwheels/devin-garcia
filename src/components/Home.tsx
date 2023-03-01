import Card from './Card';
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
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
		<div className='main-component' id='home'>
			<div id='grid' className='home-grid'>
				<div className='grid-row'>
					<Card project={project} />
					<Card project={project} />
					<Card project={project} />
				</div>
				<div className='grid-row'>
					<Card project={project} />
					<Card project={project} />
					<Card project={project} />
				</div>
				<div className='grid-row'>
					<Card project={project} />
					<Card project={project} />
					<Card project={project} />
				</div>
			</div>
		</div>
	);
}
