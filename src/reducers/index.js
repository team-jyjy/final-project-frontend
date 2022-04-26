import {ADD} from '../action'
import {combineReducers} from 'redux';
import { action } from 'history';

const initState = {
  str: 100
}

const data = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return state, {
        str: state.str + 100
      };
    default:
      return state;
  }
}

const App = combineReducers({
  data
})

export default App;