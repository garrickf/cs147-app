// Modal selectors
export const getModalActive = store => store.modal.active;
export const getModalHeader = store => store.modal.payload.header;
export const getModalBody = store => store.modal.payload.body;
export const getModalType = store => store.modal.payload.type;
export const getModalContent = store => store.modal.payload.story;
export const getModalPayload = store => store.modal.payload;
export const getRead = store => store.modal.read;

// Pressure selectors
export const getPressurePercent = store => store.pressure.percent;
export const getPressureFilled = store => store.pressure.filled;
export const getPressureLog = store => store.pressure.recentActions;
export const getPressureLogMostRecent = store => {
  const actions = store.pressure.recentActions;
  if (actions.length) {
    return actions[actions.length - 1];
  }
  return '';
};
export const getPressureLogSize = store => store.pressure.recentActions.length;

export const getPressureVisible = store => store.pressure.visible;

// Beacon selectors
export const getBeacons = store => store.beacons.beacons;
