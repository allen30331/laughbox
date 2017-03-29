import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {Link} from 'react-router';


class PostsIndex extends Component {
	
	componentWillMount() {
		this.props.fetchPosts();
		
	}

	renderPosts() {
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id}>
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			)
		})
	}


	render() {
		return (
			<div>
				<div className="header-container">
			      	<header>
				      	<div className="row">
				      		<div className="col-md-12">
				      			<h3>laugh box</h3>
				      		</div>
				      	</div>
				  	</header>
		  		</div>

		  		<div className="summary-container">

		  			<div className="row">
		  				<div className="col-md-6">
		  					<p>Share</p>
		  					<p>Your</p>
		  					<p>Laughs</p>
		  				</div>
		  			</div>
		  		</div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
						add a joke
					</Link>
				</div>
					<h3>Jokes</h3>
					<ul className="list-group">
						{this.renderPosts()}	
					</ul>
			</div>
		);
	}
}



function mapStateToProps(state) {
	return {posts: state.posts.all};
}


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);