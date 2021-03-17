import React from 'react';
import { connect } from 'react-redux';
import { delitContact } from '../../redux/contact/contact-actions';

const ContactList = ({ contacts, delitContact }) => {
  const onHandleChange = e => {
    delitContact(e.target.id);
  };

  return (
    <ul>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
            <button id={id} type="button" onClick={onHandleChange}>
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  delitContact: id => dispatch(delitContact(id)),
});

const mapStateToProps = state => ({
  contacts: state.contact.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.contact.filter.toLowerCase()),
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
