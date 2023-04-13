import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	let error: unknown = useRouteError();

	return (
		<div id='error-page'>
			<h2>Sorry, Wrong Castle!</h2>
			<h3>
				<i>'{error.error.message.split('"')[1]}' doesn't exist, silly!</i>
			</h3>
			<a href='/'>Turn Back!</a>
		</div>
	);
}
