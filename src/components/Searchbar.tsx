import React from 'react';
import { debounce } from 'throttle-debounce';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import { searchMovieAction } from '../store/actions/dataAction';
import setAnimationAction from '../store/actions/uiAction';

import './css/Searchbar.css';

const Searchbar = () => {
  const dispatch = useDispatch();

  const debounceDispatchSearch = debounce(1000, (val: string) => {
    dispatch(searchMovieAction(val));
  });
  const debounceDispatchClear = debounce(350, () =>
    dispatch(searchMovieAction('')),
  );

  const handleOnBlur = () => {
    dispatch(setAnimationAction('collapse', false));
    debounceDispatchClear();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    if (value === '' || value === null) {
      dispatch(setAnimationAction('collapse', false));
    }

    debounceDispatchSearch(value);
  };

  return (
    <Form className="app-searchbar">
      <Form.Control
        type="text"
        placeholder="Search Movie"
        as="input"
        onChange={handleChange}
        onBlur={handleOnBlur}
      />
    </Form>
  );
};

export default Searchbar;
