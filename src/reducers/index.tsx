import { combineReducers } from 'redux';
import counter from './counter';
import todoList from './todoList';

const rootReducer = combineReducers({
  todoList,
  counter,
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
