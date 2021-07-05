import { AUTH, LOGOUT } from "../constants/actionTypes";

//redux / reducer takes in two arguments, (state, argument). Argument MUST have a default value (state=[], argument). You then use a SWITCH-CASE statement to define what happnes to the state depending on the action

// you can export a nameless function, you can call duch as 'import postReducer from './posts.js'
const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem('profile', JSON.stringify({...action?.data}))
      return {...state, authData: action?.data};
    case LOGOUT:
      localStorage.clear() // clears the entire local storage, needed to remove user from localStorage
      return {...state, authData: action?.data};
    default:
      return state;
      break;
  }
};

export default authReducer;
