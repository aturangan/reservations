import { combineReducers } from '@reduxjs/toolkit';

import providerReducer from './providerReducer';

const rootReducer = combineReducers({
  providerData: providerReducer
});

export default rootReducer;