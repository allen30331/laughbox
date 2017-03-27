import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {


	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	render() {
		const {post} = this.props

		//ajax spinner that retruns empty div while
		//network request is completed
		if (!this.props.post) {
			return <div></div>
		}
		
		return (
			<div>
				<Link to="/">back to jokes</Link>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);