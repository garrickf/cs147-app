import * as a from './actionTypes';

// Modal actions
export const updateModal = data => ({
  type: a.UPDATE_MODAL,
  data: data,
});

export const updateRead = index => ({
  type: a.UPDATE_READ,
  idx: index,
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

export const markPressureVisible = isVisible => ({
  type: a.MARK_PRESSURE_VISIBLE,
  visible: isVisible,
});

export const addBeacon = beacon => ({
  type: a.ADD_PIN,
  beacon: beacon,
});
