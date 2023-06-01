import './styles/Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
	const traits: string[] = [
		'NYC Based',
		'Fullstack',
		'Web Developer',
		'Software Engineer',
		'Tech-Lover',
		'Multidisciplinary',
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
		'python',
		'postgresql',
		'materialui',
		'tailwindcss',
		'html5',
		'css3',
		'nextjs',
		'nodejs',
		'latex',
		'figma',
		'git',
		'godot',
		'vscode',
		'codepen',
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
			<div className='content'>
				<h2 className='greeting'>
					{/* {"Hey, I'm Dev"
							.toUpperCase()
							.split(' ')
							.map((w) => (
								<span key={w}>{`${w}`}</span>
							))} */}
					Hey, I'm Dev!
				</h2>
				<div className='about'>
					{/* {'Fullstack Software Engineer'.split(' ').map((w) => (
							<span key={w}>{`${w} `}</span>
						))} */}
					<h3>Fullstack Software Engineer</h3>
					<p>
						My specialty is utilizing my non-traditional experience to create
						<span> striking visual designs</span>, supported by a{' '}
						<span>RESTful API</span> and
						<span>fully functional backend</span>.
					</p>
				</div>
				<div className='links'>
					<Link className='link' to={'works'}>
						View My Work
					</Link>
					<Link className='link' to={'contact'}>
						Contact Me
					</Link>
				</div>
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
