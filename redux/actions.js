import * as a from './actionTypes';

// Modal actions
export const updateModal = ({header, body}) => ({
  type: a.UPDATE_MODAL,
  data: {
    header,
    body,
  },
});

export const toggleModal = () => ({
  type: a.TOGGLE_MODAL,
});
