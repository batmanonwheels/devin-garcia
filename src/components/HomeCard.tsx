import { AiFillGithub } from 'react-icons/ai';

type HomeCardProps = {
	url?: string;
	name?: string;
	image?: string;
	images?: string[];
};

export default function HomeCard({ url, name, image }: HomeCardProps) {
	return (
		<div className='card'>
			<a href={url}>
				<h1>{name}</h1>
			</a>
			<img src={image} />
		</div>
	);
}
