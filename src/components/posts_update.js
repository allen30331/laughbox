import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {updatePost, fetchPost} from '../actions/index';
import {Link} from 'react-router';

class PostsUpdate extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount() {
		this.props.fetchPost(this.props.params.id);
	}

	onSubmit(props) {
		this.props.updatePost(this.props.params.id, props)
			.then(() => {
				this.context.router.push('/');
			});
	}


	render() {

		const {post} = this.props;

		const {fields: {title, categories, content}, handleSubmit} = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Tell a joke</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" value={post.title} {...title} required />
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control"  value={post.categories} {...categories} required />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control"  value={post.content} {...content} required />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return {post: state.posts.post};
}

export default reduxForm({
	form: 'PostUpdate',
	fields: ['title', 'categories', 'content']	
}, mapStateToProps, {updatePost, fetchPost})(PostsUpdate);
