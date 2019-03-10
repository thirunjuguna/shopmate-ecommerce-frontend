import { combineReducers } from 'redux';

import login from './auth/login';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
  login,
});

export default allReducers;
