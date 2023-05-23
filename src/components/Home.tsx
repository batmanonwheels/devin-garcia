import './styles/Home.css';

export default function Home() {
	const traits: string[] = [
		'NYC Based',
		'Fullstack',
		'Web Developer',
		'Software Engineer',
		'Tech-Lover',
		'Creative',
		'Design-focused',
		'Agile',
		'Music & Video Game Lover',
	];
	const skills: string[] = [
		'typescript',
		'javascript',
		'react',
		'ruby',
		'rails',
		'postgresql',
		'materialui',
		'tailwindcss',
		'html5',
		'css3',
		'python',
		'latex',
	];
	return (
		<div className='carousel-container' id='home'>
			<div className='skill-marquee top'>
				<ul className='marquee-content'>
					{traits.map((traits, i) => (
						<li key={`trait ${traits.indexOf(traits)}`}>
							<h3>{traits.toUpperCase()}</h3>
						</li>
					))}
				</ul>
				<ul className='marquee-content' aria-hidden='true'>
					{traits.map((traits, i) => (
						<li key={`trait ${traits.indexOf(traits) + traits.length}`}>
							<h3>{traits.toUpperCase()}</h3>
						</li>
					))}
				</ul>
			</div>
			<div className='div1'>pic</div>
			<div className='div2'>about</div>
			<div className='div3'>3å</div>
			<div className='div4'>fun</div>
			<div className='div5'>5</div>
			<div className='div6'>6</div>
			<div className='div7'>7</div>
			<div className='div8'>8</div>
			<div className='skill-marquee bottom'>
				<ul className='marquee-content'>
					{skills.map((tech, i) => (
						<li key={`tech ${skills.indexOf(tech)}`}>
							<i
								title={tech.toUpperCase()}
								className={`devicon-${tech}-plain`}
							></i>
						</li>
					))}
				</ul>
				<ul className='marquee-content' aria-hidden='true'>
					{skills.map((tech, i) => (
						<li key={`tech ${skills.indexOf(tech) + skills.length}`}>
							<i
								title={tech.toUpperCase()}
								className={`devicon-${tech}-plain`}
							></i>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
