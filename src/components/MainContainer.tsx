import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from 'react-router-dom';

import Home from './Home';
import PortfolioCarousel from './PortfolioCarousel';
import Contact from './Contact';
import ErrorPage from './ErrorPage';

interface MainContainerProps {
	setCarouselContainer: React.Dispatch<
		React.SetStateAction<HTMLDivElement | null>
	>;
}

export default function MainContainer({
	setCarouselContainer,
}: MainContainerProps) {
	const skills: string[] = [
		'typescript',
		'javascript',
		'react',
		'nextjs',
		'nodejs',
		'ruby',
		'rails',
		'python',
		'postgresql',
		'materialui',
		'tailwindcss',
		'html5',
		'css3',
		'latex',
		'figma',
		'git',
		'vscode',
	];
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home skills={skills} />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/works',
			element: (
				<PortfolioCarousel setCarouselContainer={setCarouselContainer} />
			),
		},
		{
			path: '/contact',
			element: <Contact skills={skills} />,
		},
	]);

	return (
		// <div>
		<RouterProvider router={router} />
		// </div>
	);
}
