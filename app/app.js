import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Main from './components/main';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import ImageView from './components/container/ImageView';

let initialState = {
	images: []
};

const store = configureStore(initialState);

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Main}>
				<Route path='img/:id' component={ImageView}/>
			</Route>

		</Router>
	</Provider>
	), document.getElementById('app'));
