import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

// components
import GlobalLoader from 'App/Components/GlobalLoader';
import MainPage from 'App/Pages/MainPage';

// resource files
const history = createHistory();

function App() {
	return (
		<div>
			<GlobalLoader />
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={MainPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
