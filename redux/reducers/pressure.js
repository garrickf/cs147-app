// Keeps track of the pressure meter

import {
  ADD_PRESSURE,
  EMPTY_PRESSURE,
  EMPTY_LOG,
  MARK_PRESSURE_VISIBLE,
} from '../actionTypes';

const initialState = {
  percent: 0,
  filled: false,
  recentActions: [], // String log of actions that have filled the bar
  visible: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRESSURE:
      return {
        ...state,
        percent: Math.min(100, state.percent + action.data.amount),
        filled: Math.min(100, state.percent + action.data.amount) === 100,
        recentActions: [...state.recentActions, action.data.action],
      };
    case EMPTY_PRESSURE:
      return {
        ...state,
        percent: 0,
        filled: false,
      };
    case EMPTY_LOG:
      return {
        ...state,
        recentActions: [],
      };
    case MARK_PRESSURE_VISIBLE:
      return {
        ...state,
        visible: action.visible,
      };
    default:
      return state;
  }
}
