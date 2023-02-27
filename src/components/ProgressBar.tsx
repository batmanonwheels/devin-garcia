export default function ProgressBar({ pathName }: { pathName: string }) {
	return (
		<>
			{pathName.includes('software') ? (
				<div className='vl' id='green' />
			) : pathName.includes('music') ? (
				<div className='vl' id='blue' />
			) : (
				<div className='vl' id='purple' />
			)}
		</>
	);
}
