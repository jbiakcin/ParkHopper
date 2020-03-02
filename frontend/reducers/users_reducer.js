import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (key) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.currentUser.id]: action.curentUser})
    default:
      return state;
  }
};

export default usersReducer;