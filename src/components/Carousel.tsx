import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import ErrorPage from './ErrorPage';
import Contact from './Contact';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/works',
		element: <Portfolio />,
	},
	{
		path: '/contact',
		element: <Contact />,
	},
]);
export default function Carousel() {
	return <RouterProvider router={router} />;
}
