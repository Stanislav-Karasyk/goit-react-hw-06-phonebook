import React from 'react'

const ContactList = ({filterContacts, handleDeleteContact}) => {
    return (
        <ul>
          {filterContacts.map(({ name, id, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
                <button
                  id={id}
                  type="button"
                  onClick={handleDeleteContact}
                >
                  Delete
                </button>
              </p>
            </li>
          ))}
        </ul>
    )
}

export default ContactList
