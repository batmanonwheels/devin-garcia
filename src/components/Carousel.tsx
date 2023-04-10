import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import ErrorPage from './ErrorPage';
import Contact from './Contact';

interface CarouselProps {
	setCarouselContainer: (carouselContainer: HTMLDivElement | null) => void;
}

export default function Carousel({ setCarouselContainer }): CarouselProps {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
			errorElement: <ErrorPage />,
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
