import { SET_USER_PROFILE, SET_USER_EVENTS } from './constants';

const initialState = {
  userProfile: null,
  userEvents: null,
};

function logbookReducer(
  /* istanbul ignore next */ state = initialState,
  action,
) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, userProfile: action.payload };
    case SET_USER_EVENTS:
      return { ...state, userEvents: action.payload };
    default:
      return state;
  }
}

export default logbookReducer;
