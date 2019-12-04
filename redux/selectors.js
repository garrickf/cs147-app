// Modal selectors
export const getModalActive = store => store.modal.active;
export const getModalHeader = store => store.modal.header;
export const getModalBody = store => store.modal.body;
export const getModalType = store => store.modal.type;
export const getModalContent = store => store.modal.story;

// Pressure selectors
export const getPressurePercent = store => store.pressure.percent;
export const getPressureFilled = store => store.pressure.filled;
export const getPressureLog = store => store.pressure.recentActions;
export const getPressureVisible = store => store.pressure.visible;

// Beacon selectors
export const getBeacons = store => store.beacons.beacons;
