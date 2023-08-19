import ErrorBoundary from './component/ErrorBoundary';

import Ruhi from './component/Ruhi';
import Giash from './component/Giash';
import Kawser from './component/Kawser';
import Rabbi from './component/Rabbi';
import Mustakim from './component/Mustakim';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements,
} from 'react-router-dom';
import Root from './component/Root';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' errorElement={<ErrorBoundary />} element={<Root />}>
			<Route path='ruhi' element={<Ruhi />} />
			<Route path='giash' element={<Giash />} />
			<Route path='kawser' element={<Kawser />} />
			<Route path='rabbi' element={<Rabbi />} />
			<Route path='Mustakim' element={<Mustakim />} />
		</Route>
	)
);
export default function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}
