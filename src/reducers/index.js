import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import {reducer} from 'redux-form';

const rootReducer = combineReducers({
  // state: (state = {}) => state
    posts: PostsReducer,
    form: reducer
});

export default rootReducer;
