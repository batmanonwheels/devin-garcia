import './styles/Texture.css';

export default function Texture() {
	return (
		<svg>
			<filter id='grainy'>
				<feTurbulence type='turbulence' baseFrequency={0.6} />
			</filter>
		</svg>
	);
}
