import './styles/Home.css';

import { Link } from 'react-router-dom';

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
		'Multimedia Artist',
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
						<li key={`trait ${i}`}>
							<h3>{traits.toUpperCase()}</h3>
						</li>
					))}
				</ul>
				<ul className='marquee-content' aria-hidden='true'>
					{traits.map((traits, i) => (
						<li key={`trait ${i + 10})}`}>
							<h3>{traits.toUpperCase()}</h3>
						</li>
					))}
				</ul>
			</div>
			<div className='body'>
				<div className='greeting'>
					<h2>
						{"Hey, I'm Dev"
							.toUpperCase()
							.split(' ')
							.map((w) => (
								<span key={w}>{`${w}`}</span>
							))}
					</h2>
				</div>
				<div className='about'>
					<h3>
						{'Fullstack Software Engineer'.split(' ').map((w) => (
							<span key={w}>{`${w} `}</span>
						))}
					</h3>
				</div>

				<Link className='link' to={'works'}>
					<h4>View My Portfolio</h4>
				</Link>
			</div>
			<div className='skill-marquee bottom'>
				<ul className='marquee-content'>
					{skills.map((tech, i) => (
						<li key={`tech ${i}`}>
							<i
								title={tech.toUpperCase()}
								className={`devicon-${tech}-plain`}
							></i>
						</li>
					))}
				</ul>
				<ul className='marquee-content' aria-hidden='true'>
					{skills.map((tech, i) => (
						<li key={`tech ${i + 12}`}>
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
