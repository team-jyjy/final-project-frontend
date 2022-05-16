import { combineReducers } from 'redux';
import token from './loginStates';
import counter from './counter';

const rootReducer = combineReducers({
    counter,
    token,
});
 
export default rootReducer;
