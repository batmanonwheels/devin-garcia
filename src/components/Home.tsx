import './styles/Home.css';
import { Link } from 'react-router-dom';
import resume from '../files/DG_SWE_Resume.pdf';
import img_me from '../images/me.webp';

interface HomeProps {
	skills: string[];
}

export default function Home({ skills }: HomeProps) {
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

	const name: string | null = localStorage.getItem('name');

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
				<div className='about'>
					{name === null ? (
						<h1>Hey, I'm Dev!</h1>
					) : (
						<h1>{`Hey ${name}, I'm Dev!`}</h1>
					)}

					<h3> I'm a Fullstack Software Engineer</h3>
					<p>
						My specialty is utilizing my non-traditional experience to create
						elegant and striking visual designs, supported by a RESTful and
						fully functional backend.
					</p>
					<div className='links'>
						<Link className='link' to={'works'}>
							View My Work
						</Link>
						<Link className='link' to={'contact'}>
							Contact Me
						</Link>
						<a className='link' href={resume} download={'devingarciaresume'}>
							View My Resume
						</a>
					</div>
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
