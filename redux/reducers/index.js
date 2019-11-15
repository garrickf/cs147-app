import {combineReducers} from 'redux';
import modal from './modal';

// Right now this seems simple, but the slice organization should come in handy
// if more state is introduced.
export default combineReducers({modal});
