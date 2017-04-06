import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router'
import routes from './routes';
import promise from 'redux-promise';

import reducers from './reducers';

//Actions will flow through promise middleware before reaching the reducers.
const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);

//This renders the component into the 'root' element div inside
//index.html
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root'));