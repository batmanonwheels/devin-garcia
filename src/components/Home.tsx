import HomeCard from './HomeCard';
import './styles/Home.css';
import { AiFillGithub } from 'react-icons/ai';

export default function Home() {
	const homeCardData: Object[] = [
		{
			url: '/software',
			name: 'software engineering',
			image:
				'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		},
		{
			url: '/music',
			name: 'music',
			image:
				'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		},
		{
			url: '/about',
			name: 'about me',
			image:
				'https://user-images.githubusercontent.com/5254749/217098731-71317e59-c0e9-4489-910f-ddb2c117a8a7.png',
		},
	];
	return (
		<div className='main-component' id='home'>
			<div id='grid' className='home-grid'>
				{homeCardData.map((data, index: Number) => (
					<HomeCard
						key={index}
						url={data.url}
						name={data.name}
						image={data.image}
					/>
				))}
			</div>
		</div>
	);
}
