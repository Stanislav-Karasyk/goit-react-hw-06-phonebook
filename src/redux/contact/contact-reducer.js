import { combineReducers } from 'redux';
import types from './contact-types';

const contacts = (state = [], {type, payload}) => {
    switch(type) {
        case types.CREATE_CONTACT:
            return [...state, payload]

        case types.DELITE_CONTACT:
          return [...state.filter(item => (
            item.id !== payload
          ))]
        default: 
        return state;
    }
};

const filter = (state = '', {type, payload}) => {
  switch(type) {
    case types.ADD_FILTER_VALUE:
        return payload
    default: 
    return state;
}
};

export default combineReducers({
  contacts,
  filter,
});
