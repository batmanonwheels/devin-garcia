export default function Card() {
	const handleHover = (e: Event) => {
		// console.log(e.target);
		// if (e.type === 'mouseenter' || e.type === 'mouseover') {
		setTimeout(() => {
			const ele: Element = e.target;
			ele!.classList.toggle('hiding');
		}, 500);
	};
	return <div className='card' onMouseLeave={(e) => handleHover(e)}></div>;
}
