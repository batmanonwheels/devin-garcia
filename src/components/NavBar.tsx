export default function NavBar() {
	return (
		<nav id='nav-bar'>
			<div className='nav-bar-section'>
				<div className='vl' id='brown'></div>
				<a href={'/'} className='nav-bar-tabs'>
					<h1>HOME</h1>
				</a>
			</div>
			<div className='nav-bar-section'>
				<div className='vl' id='green'></div>
				<a href={'/software'} className='nav-bar-tabs'>
					<h1>SOFTWARE</h1>
				</a>
			</div>
			<div className='nav-bar-section'>
				<div className='vl' id='blue'></div>
				<a href={'/music'} className='nav-bar-tabs'>
					<h1>MUSIC</h1>
				</a>
			</div>
			<div className='nav-bar-section'>
				<div className='vl' id='purple'></div>
				<a href={'/about'} className='nav-bar-tabs'>
					<h1>ABOUT</h1>
				</a>
			</div>
		</nav>
	);
}
