import * as a from './actionTypes';

// Modal actions
export const updateModal = ({header, body, type, story}) => ({
  type: a.UPDATE_MODAL,
  data: {
    header,
    body,
    type,
    story,
  },
});

export const updateRead = ({read}) => ({
  type: a.UPDATE_READ,
  data: {
    read,
  }
});

export const toggleModal = () => ({
  type: a.TOGGLE_MODAL,
});

export const addPressure = (amount, action) => ({
  type: a.ADD_PRESSURE,
  data: {
    amount,
    action,
  },
});

export const emptyPressure = () => ({
  type: a.EMPTY_PRESSURE,
});

export const emptyLog = () => ({
  type: a.EMPTY_LOG,
});

export const addBeacon = beacon => ({
  type: a.ADD_PIN,
  beacon: beacon,
});
