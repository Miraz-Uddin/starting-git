import ErrorBoundary from './component/ErrorBoundary';

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Giash from './component/Giash';
import Kawsar from './component/Kawsar';
import Mustakim from './component/Mustakim';
import Rabbi from './component/Rabbi';
import Root from './component/Root';
import Ruhi from './component/Ruhi';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' errorElement={<ErrorBoundary />} element={<Root />}>
			<Route path='ruhi' element={<Ruhi />} />
			<Route path='giash' element={<Giash />} />
			<Route path='kawsar' element={<Kawsar />} />
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
