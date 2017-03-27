import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	}


	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}


	onDeleteClick() {
		this.props.deletePost(this.props.params.id)
		.then(() => {this.context.router.push('/'); });
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
				<button 
					className="btn btn-danger"
					onClick={this.onDeleteClick.bind(this)}>
					delete joke
				</button>
				<button className="btn btn-primary">
					<Link to={"posts/" + this.props.params.id + "/update"}>
					update joke
					</Link>
				</button>
			</div>
		);
	}
}


function mapStateToProps(state) {
	return {post: state.posts.post};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);