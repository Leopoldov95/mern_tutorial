//redux / reducer takes in two arguments, (state, argument). Argument MUST have a default value (state=[], argument). You then use a SWITCH-CASE statement to define what happnes to the state depending on the action

// you can export a nameless function, you can call duch as 'import postReducer from './posts.js'
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
      break;
  }
};