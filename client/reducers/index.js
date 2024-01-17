import { combineReducers } from 'redux';

//import all reducers here
import deckReducer from './deckReducer.js';
import userReducer from './userReducer.js';
import cardReducer from './cardReducer.js';

// combine reducers
const reducers = combineReducers({
  //if we had other reducers, they would go here
  deck: deckReducer,
  user: userReducer,
  card: cardReducer,
});

// make the combined reducers available for import
export default reducers;
