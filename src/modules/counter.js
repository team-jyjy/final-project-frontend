const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';
 
export const plusCounter = (count) => ({ type: PLUS, count });
export const minusCounter = (count) => ({ type: MINUS, count });
 
const initialState = 0;
 
const counter = (state = initialState, action) => {
    switch (action.type) {
        case PLUS:
            return action.count ? state + action.count : state + 1;
        case MINUS:
            return action.count ? state - action.count : state - 1;
        default:
            return state;
    }
};
 
export default counter;