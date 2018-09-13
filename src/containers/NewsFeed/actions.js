import { SET_USER_PROFILE, SET_USER_EVENTS } from './constants';

export function setUserProfile(data) {
  return {
    type: SET_USER_PROFILE,
    payload: data,
  };
}

export function setUserEvents(data) {
  return {
    type: SET_USER_EVENTS,
    payload: data,
  };
}
