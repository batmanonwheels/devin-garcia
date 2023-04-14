import {
	createBrowserRouter,
	RouteObject,
	RouterProvider,
} from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import ErrorPage from './ErrorPage';
import Contact from './Contact';
import About from './About';

interface CarouselProps {
	setCarouselContainer: React.Dispatch<
		React.SetStateAction<HTMLDivElement | null>
	>;
}

export default function Carousel({ setCarouselContainer }: CarouselProps) {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		{
			path: '/about',
			element: <About />,
		},
		{
			path: '/works',
			element: <Portfolio setCarouselContainer={setCarouselContainer} />,
		},
		{
			path: '/contact',
			element: <Contact />,
		},
	]);

	return <RouterProvider router={router} />;
}
