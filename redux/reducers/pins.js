/**
 * Keeps track of the beacons on the screen. Beacons have:
 * - Header (title)
 * - Body (if a news story)
 * - Picture (if a media story)
 * - Location (x and y)
 * - Type (news or media)
 * - Author (self or other)
 * - Read (boolean)
 */

import {ADD_PIN} from '../actionTypes';

const fakeContent = [
  {
    header: 'Amazon Rainforest Burning',
    body:
      'Dark clouds of smoke smothered cities in Brazil as parts of the Amazon burned at a rate not seen in years, and.... ',
    location: {
      x: 100,
      y: 200,
    },
  },
  {
    header: 'Wave Beach',
    body: null,
    location: {
      x: 300,
      y: 400,
    },
  },
  {
    // fake image
    header: ' this is a fake image ',
    body: 'this is a fake image ~',
    location: {
      x: 150,
      y: 250,
    },
  },
  {
    // fake link
    header: 'this is a fake link',
    body: 'this is a fake link ~ ',
    location: {
      x: 200,
      y: 300,
    },
  },
];

const initialState = {
  beacons: [
    // For now, start with fake content.
    ...fakeContent,
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PIN:
      // The payload of the action is all the information required for a beacon.
      return {
        ...state,
        beacons: [...state.beacons, action.beacon],
      };
    default:
      return state;
  }
}
