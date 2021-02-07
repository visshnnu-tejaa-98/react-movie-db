import './App.css';
import Home from './components/home';
import AddMovie from './components/addMovie';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieProvider } from './components/movieContext';

function App() {
	return (
		<MovieProvider>
			<BrowserRouter>
				<div className='App'>
					<Navbar />
					<Switch>
						<Route path='/' exact>
							<Home />
						</Route>
						<Route path='/add' exact>
							<AddMovie />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</MovieProvider>
	);
}

export default App;
