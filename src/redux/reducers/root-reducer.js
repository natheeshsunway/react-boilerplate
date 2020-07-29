import { combineReducers } from 'redux';
import { reducer as entities } from 'redux-entity';
import counter from './counter';

export default combineReducers({
  entities,
  counter
});
