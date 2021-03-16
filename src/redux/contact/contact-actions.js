import types from './contact-types';
import { v4 as uuidv4 } from 'uuid';

const createContact = ({ name, number }) => ({
  type: types.CREATE_CONTACT,
  payload: {
    name,
    id: uuidv4(),
    number,
  },
});

const addFilterValue = value => ({
  type: types.ADD_FILTER_VALUE,
  payload: value,
});

const delitContact = id => ({
  type: types.DELITE_CONTACT,
  payload: id,
});

export { createContact, addFilterValue, delitContact };
