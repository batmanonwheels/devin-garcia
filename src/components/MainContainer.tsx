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
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
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
			element: <Contact />,
		},
	]);

	return (
		// <div>
		<RouterProvider router={router} />
		// </div>
	);
}
