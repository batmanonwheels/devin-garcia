export default function Title() {
	const name: string = 'DEVIN GARCIA';
	return (
		<a href={'/'} id='title'>
			<h1>DEVIN GARCIA</h1>
			{/* <div id='title-letters'>
				{name.split('').map((l, index) => (
					<h1 key={index}>{l}</h1>
				))}
			</div> */}
		</a>
	);
}
