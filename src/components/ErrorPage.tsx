import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<div id='error-page'>
			<h2>Uh Oh!</h2>
			<p>Sorry, wrong castle!</p>
			<p>
				<i>'{error.error.message.split('"')[1]}' doesn't exist, silly!</i>
			</p>
			<a href='/'>Turn Back</a>
		</div>
	);
}
