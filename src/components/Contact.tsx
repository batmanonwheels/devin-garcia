import './styles/Contact.css';
import { ImInstagram, ImLinkedin, ImTwitter, ImGithub } from 'react-icons/im';

export default function Contact() {
	const traits: string[] = [
		'Contact Me!',
		"Let's get in touch!",
		"Let's chat!",
		'Hit me up!',
		'Contact Me!',
		"Let's get in touch!",
		"Let's chat!",
		'Hit me up!',
		'Contact Me!',
		"Let's get in touch!",
		"Let's chat!",
		'Hit me up!',
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
		<div className='carousel-container' id='contact'>
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
			<div className='socials'>
				{/* <h3>
					Follow Me! <br></br>
				</h3> */}
				<div className='social-icons'>
					<a href='https://github.com/batmanonwheels'>
						<ImGithub />
						<h3>Github</h3>
					</a>
					<a href='http://twitter.com/dvnjgrc'>
						<ImTwitter />
						<h3>Twitter</h3>
					</a>
					<a href='https://www.linkedin.com/in/devinjgarcia/'>
						<ImLinkedin />
						<h3>Linkedin</h3>
					</a>
					<a href='https://www.instagram.com/tellem2bringoutthewholeocean/'>
						<ImInstagram />
						<h3>Instagram</h3>
					</a>
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
