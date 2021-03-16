import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createContact} from '../../redux/contact/contact-actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreateContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            name="name"
            type="text"
            onChange={this.handleInput}
            value={name}
          />
        </label>
        <label>
          Number
          <input
            name="number"
            type="text"
            onChange={this.handleInput}
            value={number}
          />
        </label>
        <button type="submit">Add contacts</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateContact: ({ name, number }) =>
    dispatch(createContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);
