import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = ev => {
    dispatch(setFilter(ev.target.value));
  };

  return (
    <label>
      Filter contacts by name, M'lord:
      <input type="text" onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;
