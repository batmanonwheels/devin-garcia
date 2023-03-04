import { AiFillGithub } from 'react-icons/ai';

export default function HomeCard() {
	// const handleHover = (e: Event) => {
	// 	// console.log(e.target);
	// 	// if (e.type === 'mouseenter' || e.type === 'mouseover') {
	// 	setTimeout(() => {
	// 		const ele: Element = e.target;
	// 		ele!.classList.toggle('hiding');
	// 	}, 500);
	// };

	const handleClick = (e: MouseEvent) => {
		const gridRows = document.querySelectorAll('.grid-row');
		// gridRows.forEach((row) => {
		// 	console.log(row);
		// });
		console.log(gridRows[0].style.gridTemplateColumns);
	};

	return (
		<div
			className='card'
			onClick={(e) => {
				handleClick(e);
			}}
		>
			{/* <div className='card' onMouseLeave={(e) => handleHover(e)}></div> */}
		</div>
	);
}
