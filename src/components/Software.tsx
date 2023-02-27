import Card from './Card';

export default function Software() {
	const project: Object = {
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
			{/* <div id='main-line' /> */}
			<div className='main-component' id='software'>
				{/* <Card name={project.name} link={project.link: String} image={project.image} description={project.description} githubLink={project.githubLink}/> */}
				<Card project={project} />
				<Card project={project} />
				{/* <Card project={project} />
				<Card project={project} />
				<Card project={project} />
				<Card project={project} /> */}
			</div>
		</>
	);
}
