/**
 * Keeps track of the modal where story information is displayed.
 */

import {UPDATE_MODAL, TOGGLE_MODAL} from '../actionTypes';

const initialState = {
  // header: 'Header',
  // body: 'Body',
  // active: false,
  // type: 'NEWS',
  // story: ['www.bbc.co.uk', 'BBC']
  active: false,
  payload: {
    header: 'Header',
    body: 'Body',
    type: 'NEWS',
    story: ['www.bbc.co.uk', 'BBC'],
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MODAL:
      return {
        ...state,
        payload: action.data,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        active: !state.active,
      };
    default:
      return state;
  }
}
