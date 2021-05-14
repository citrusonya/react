import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import Calculator from './pages/Calculator';

const App = () => {
	return (
		<>
			<Router>
				<div className='container wrapper'>
					<Header brand='home' />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/todo'>
							<ToDoList />
						</Route>
						<Route path='/calculator'>
							<Calculator />
						</Route>
					</Switch>
				</div>
			</Router>
		</>
	)
}

export default App
