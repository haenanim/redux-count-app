import { combineReducers } from 'redux';
import counter from './counter';
import todoList from './todoList';
import posts from './posts';

const rootReducer = combineReducers({
  todoList,
  counter,
  posts,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
