import SET_USER_DATA from './constants';

const initialState = {
  user: null,
};

export default function app(
  /* istanbul ignore next */ state = initialState,
  action,
) {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
