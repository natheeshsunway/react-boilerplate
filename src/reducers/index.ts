import { combineReducers } from 'redux';
import entities from '~reducers/entities/reducer';
import counter from '~reducers/counter/reducer';

export default combineReducers({
  counter,
  entities,
});
