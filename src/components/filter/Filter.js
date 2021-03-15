import React from 'react'

const Filter = ({filter, handleInput}) => {
    return (
        <label>
          Find contacts by name
          <input
            name="filter"
            type="text"
            onChange={handleInput}
            value={filter}
          />
        </label>
    )
}

export default Filter
