import { combineReducers } from 'redux';

import account from './account';
import pokerGame from './pokerGame';

export default combineReducers({
  account,
  pokerGame
})