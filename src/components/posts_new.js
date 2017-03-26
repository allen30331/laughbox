import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
	render() {
		const {fields: {title, categories, content}, handleSubmit} = this.props;

		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Tell a joke</h3>
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
					<textarea className="form-control" {...content} required />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}


export default reduxForm({
	form: 'PostNew',
	fields: ['title', 'categories', 'content']	
}, null, {createPost})(PostsNew);
