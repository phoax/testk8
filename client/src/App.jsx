import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Fib from './Fib';
import OtherPage from './OtherPage';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Fib Calculator</h1>
					<Link to="/">Home</Link>
					<Link to="/otherpage">OtherPage</Link>
				</header>
				<div>
					<Route exact path="/" component={Fib} />
					<Route path="/otherpage" component={OtherPage} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
