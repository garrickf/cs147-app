import {combineReducers} from 'redux';
import modal from './modal';
import pressure from './pressure';
import beacons from './pins';

// Right now this seems simple, but the slice organization should come in handy
// if more state is introduced.
export default combineReducers({modal, pressure, beacons});
