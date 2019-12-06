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

import {ADD_PIN, UPDATE_READ} from '../actionTypes';

const fakeContent = [
  {
    header: 'Amazon Rainforest Burning',
    body:
      'Dark clouds of smoke smothered cities in Brazil as parts of the Amazon burned at a rate not seen in years, and.... ',
    location: {
      x: 100,
      y: 200,
    },
    mine: false,
    read: false,
    type: 'NEWS',
    story: [
      'https://www.bbc.com/news/world-latin-america-49971563',
      'BBC',
      'fish',
      0,
    ],
    attention: 3,
  },
  {
    header: 'Wave Beach',
    body: null,
    location: {
      x: 300,
      y: 400,
    },
    mine: false,
    read: false,
    type: 'MEDIA',
    story: [require('../../assets/images/beach_cleanup.jpg'), '', 'turtle', 1],
    attention: 2,
  },
  {
    header: ' Town Hall ',
    body: null,
    location: {
      x: 150,
      y: 250,
    },
    mine: false,
    read: false,
    type: 'MEDIA',
    story: [
      require('../../assets/images/environment_rally.jpeg'),
      '',
      'whale',
      2,
    ],
    attention: 5,
  },
  {
    header: 'California banned plastic bags. So why do stores keep using them?',
    body:
      'Three years ago, California voters upheld a state law prohibiting single-use plastic grocery bags. But for all the furor...',
    location: {
      x: 200,
      y: 300,
    },
    mine: false,
    read: false,
    type: 'NEWS',
    story: [
      'https://www.sfchronicle.com/politics/article/California-banned-plastic-bags-So-why-do-stores-14872852.php',
      'SF',
      'seal',
      3,
    ],
    attention: 4,
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
      return {
        ...state,
        beacons: [...state.beacons, action.beacon],
      };
    case UPDATE_READ:
      const newBeacons = [...state.beacons];
      newBeacons[action.idx].read = true;
      newBeacons[action.idx].attention+=1; 
      const newState = {
        ...state,
        beacons: newBeacons,
      };
      console.log(newState.beacons);
      return newState;
    default:
      return state;
  }
}
