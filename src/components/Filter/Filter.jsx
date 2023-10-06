import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = ev => {
    dispatch(setFilter(ev.target.value));
  };

  return (
    <form className={styles.form}>
      <label className={styles.formItem}>
        Find contacts by name
        <input
          className={styles.formInput}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleChangeFilter}
        />
      </label>
    </form>
  );
};

export default Filter;
