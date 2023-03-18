import './styles/Title.css';

export default function Title() {
	// const name: string = 'DEVIN GARCIA';

	let pathName: string = window.location.href.split('5173')[1];
	console.log();
	return (
		<a href={'/'} id='title'>
			<h1>devin garcia</h1>
		</a>
	);
}
