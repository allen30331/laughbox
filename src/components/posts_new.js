import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';
import css from '../../public/css/post-new.css'


//Returns form to create post
class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	}


	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				this.context.router.push('/');
			});
	}

	render() {
		const {fields: {title, categories, content}, handleSubmit} = this.props;

		return (
			<div className="form-container">
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Make us laugh</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} required />
				</div>

				<div className="form-group">
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} required />
				</div>

				<div className="form-group">
					<label>Content</label>
					<textarea className="form-control" rows="5" {...content} required />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
			</div>
		);
	}
}


export default reduxForm({
	form: 'PostNew',
	fields: ['title', 'categories', 'content']	
}, null, {createPost})(PostsNew);
