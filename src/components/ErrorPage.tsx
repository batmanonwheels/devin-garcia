import './styles/Error.css';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { stringSimilarity } from 'string-similarity-js';

export default function ErrorPage() {
	const error: unknown = useRouteError();
	let errorMessage: string = '';

	if (error !== undefined) {
		errorMessage = error.error.message.split('"')[1];
	}

	// console.log(typeof useRouteError());

	const routes: string[] = ['/', '/about', '/works', '/contact'];

	const routeSimilarities: number[] = routes.map((str) =>
		stringSimilarity(str, errorMessage)
	);

	const mostSimilarRoute: string =
		routes[routeSimilarities.indexOf(Math.max(...routeSimilarities))];

	return (
		<div id='error-page'>
			<h2>Sorry, Wrong Castle!</h2>
			<h3>
				<i>'{errorMessage}' doesn't exist, silly!</i>
			</h3>
			{mostSimilarRoute === '/' ? null : (
				<h4>
					Did you mean
					<a href={mostSimilarRoute}>
						<i>'{mostSimilarRoute}'</i>
					</a>
					?
				</h4>
			)}

			<a href='/'>Go Home</a>
		</div>
	);
}
