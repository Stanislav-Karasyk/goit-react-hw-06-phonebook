import React from 'react';
import { connect } from 'react-redux';
import { addFilterValue } from '../../redux/contact/contact-actions';

const Filter = ({ filter, addFilterValue }) => {
  const onHandleChange = (e) => {
    addFilterValue(e.target.value)
  }

  return (
    <label>
      Find contacts by name
      <input name="filter" type="text" onChange={onHandleChange} value={filter} />
    </label>
  );
};

const mapStateToProps = state => ({
  filter: state.contact.filter,
});

const mapDispatchToProps = dispatch => ({
  addFilterValue: value => dispatch(addFilterValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
