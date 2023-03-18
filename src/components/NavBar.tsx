import ProgressBar from './ProgressBar';

export default function NavBar() {
	let pathName: string = window.location.href;
	return (
		<div id='nav'>
			<div id='color-bar'>
				{pathName.includes('software') ||
				pathName.includes('music') ||
				pathName.includes('about') ? (
					<ProgressBar pathName={pathName} />
				) : (
					<>
						<div className='vl' id='brown'></div>
						<div className='vl' id='green'></div>
						<div className='vl' id='blue'></div>
						<div className='vl' id='purple'></div>
					</>
				)}
			</div>
			<nav id='nav-bar'>
				<a href={'/'} className='nav-bar-tabs'>
					<h1>HOME</h1>
				</a>
				<a href={'/software'} className='nav-bar-tabs'>
					<h1>SOFTWARE</h1>
				</a>
				<a href={'/music'} className='nav-bar-tabs'>
					<h1>MUSIC</h1>
				</a>
				<a href={'/about'} className='nav-bar-tabs'>
					<h1>ABOUT</h1>
				</a>
			</nav>
		</div>
	);
}
