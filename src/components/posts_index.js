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
				

		  		<div className="summary-container">

		  			<div className="row">
		  				<div className="col-md-12 share-laughs">
		  					<p className="p-slogan"><span className="slogan">tell jokes</span></p>
		  					<p className="p-sub-slogan"><span className="slogan">keep laughing</span></p>
		  				</div>
		  			</div>
		  		</div>
		  		<div className="joke-container">
					<div className="row">
						<h3>Start Laughing</h3>
						<div className="add-joke-btn-container">
							<Link to="/posts/new" className="btn btn-primary">
								add a joke
							</Link>
						</div>
						<ul className="list-group">
							{this.renderPosts()}	
						</ul>
					</div>	
				</div>
			</div>
		);
	}
}



function mapStateToProps(state) {
	return {posts: state.posts.all};
}


export default connect(mapStateToProps, {fetchPosts})(PostsIndex);