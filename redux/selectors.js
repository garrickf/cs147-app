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

// Beacon selectors
export const getBeacons = store => store.beacons.beacons;
