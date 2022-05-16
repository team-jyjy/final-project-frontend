const SETTOKEN = 'loginStates/SETTOKEN';//token을 null로 해서 로그아웃 

export const setToken = (token) => ({type:SETTOKEN, token});

const initialState = null;

const token = (state = initialState, action) => {
  switch (action.type) {
    case SETTOKEN :
      return action.token;
    default:
      return state;
  }
}

export default token;