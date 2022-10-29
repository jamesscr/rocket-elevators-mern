import {Outlet, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';
function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<Outlet />
		</div>
	);
}

export default App;
