import { combineReducers } from 'redux';
import { ADD_PIN } from '../actionTypes';
import Beacon from '../components/beacon';

const fakeContent = [
    {
        header: 'Amazon Rainforest Burning',
        body:
            'Dark clouds of smoke smothered cities in Brazil as parts of the Amazon burned at a rate not seen in years, and.... ',
    },
    {
        header: 'Wave Beach',
        body: null,
    },
    { // fake image 
        header: ' this is a fake image ',
        body: 'this is a fake image ~',
    },
    { // fake link
        header: 'this is a fake link',
        body: 'this is a fake link ~ ',
    }
];

const fakeLocations = [
    {
        x: 100,
        y: 200,
    },
    {
        x: 300,
        y: 400,
    },
    {
        x: 500,
        y: 500,
    }
];

const initialState = {
    current: [<Beacon content={fakeContent[0]} location={fakeLocations[0]} />, <Beacon content={fakeContent[1]} location={fakeLocations[1]} />]
};

const pinReducer = (state = initialState, action) => {
    if (action.type == 'ADD_PIN') {
        if (action.payload == 'link') {
            return {
                current: [...current, <Beacon content={fakeContent[3]} location={fakeLocations[2]} />]
            }
        }
        if (action.payload == 'media') {
            return {
                current: [...current, <Beacon content={fakeContent[2]} location={fakeLocations[2]} />]
            }
        };
    }
    return state;
}