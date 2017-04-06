import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import PostsUpdate from './components/posts_update';

//These are the routes that render each component.
//The App component is the root route. It will always 
//be displayed. When the route changes, the corresponding 
// component will be rendered. 
export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
		<Route path="posts/:id" component={PostsShow} />
		<Route path="posts/:id/update" component={PostsUpdate} />
	</Route>
);






