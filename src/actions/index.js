import axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPDATE_POST = 'UPDATE_POST';

const ROOT_URL = 'https://cors-anywhere.herokuapp.com/https://api-laughbox.herokuapp.com'

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts`);	 

	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(props) {
	const request = axios.post(`${ROOT_URL}/posts`, props);

	return {
		type: CREATE_POST,
		payload: request
	}
}

export function fetchPost(id) {
	const request = axios.get(`${ROOT_URL}/posts/${id}`)
	console.log(request, 'this is a fetch post request');

	return {
		type: FETCH_POST,
		payload: request
	}
}

export function updatePost(id, props){
	const request = axios.put(`${ROOT_URL}/posts/${id}`, props);

	return {
		type: UPDATE_POST,
		payload: request
	}
}


export function deletePost(id) {
	const request = axios.delete(`${ROOT_URL}/posts/${id}`);
	console.log(request, 'this is a delete post request');

	return {
		type: DELETE_POST,
		payload: request
	}
}