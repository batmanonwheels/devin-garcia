import './styles/Texture.css';

export default function Texture() {
	return (
		<svg>
			<filter id='grainy'>
				<feTurbulence type='turbulence' baseFrequency={0.5} />
			</filter>
		</svg>
	);
}
