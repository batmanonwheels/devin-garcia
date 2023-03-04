import HomeCard from './HomeCard';
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
	return (
		<div className='main-component' id='home'>
			<div id='grid' className='home-grid'>
				<div className='grid-row'>
					<HomeCard />
					<HomeCard />
					<HomeCard />
				</div>
				<div className='grid-row'>
					<HomeCard />
					<HomeCard />
					<HomeCard />
				</div>
				<div className='grid-row'>
					<HomeCard />
					<HomeCard />
					<HomeCard />
				</div>
			</div>
		</div>
	);
}
