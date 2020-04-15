import {createStore, combineReducers} from 'redux';
import * as types from './src/actions/actionTypes';
import reducers from './src/reducers';

const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  if (action.type === `${types.LOG_OUT}_FULFILLED`) {
    state = {};
  }
  return appReducer(state, action);
};

const Store = createStore(rootReducer, {});

export default Store;
