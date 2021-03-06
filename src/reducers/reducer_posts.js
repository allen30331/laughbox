import {FETCH_POSTS, FETCH_POST, UPDATE_POST} from '../actions/index';

const Initial_State = { all:[], post: null };

//Takes the action and action payload and returns new
//state. 
export default function(state = Initial_State, action) {
	switch(action.type) {
		case FETCH_POST:
			return {...state, post: action.payload.data};
		case FETCH_POSTS:
			return {...state, all: action.payload.data};
		
		default:
			return state; 
	}
}