import React from 'react';
// import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={onChange} />
  </label>
);

export default Filter;
