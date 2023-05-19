import './styles/Home.css';

export default function Home() {
	const mySkills: string[] = [
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
			<div className='banner top'>banner</div>
			<div className='div1'>pic</div>
			<div className='div2'>about</div>
			<div className='div3'>
				{mySkills.map((tech, i) => (
					<i
						key={mySkills.indexOf(tech)}
						title={tech.toUpperCase()}
						className={`devicon-${tech}-plain`}
					></i>
				))}
			</div>
			<div className='div4'>fun</div>
			<div className='div5'>contact</div>
			<div className='div6'>6</div>
			<div className='div7'>7</div>
			<div className='div8'>8</div>
			<div className='banner bottom'>banner</div>
		</div>
	);
}
