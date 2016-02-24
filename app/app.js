import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Main from './components/main';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

let initialState = {
	images: []
};

const store = configureStore(initialState);

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Main}/>
		</Router>
	</Provider>
	), document.getElementById('app'));
