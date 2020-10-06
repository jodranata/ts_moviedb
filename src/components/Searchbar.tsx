import React from 'react';
import { debounce } from 'throttle-debounce';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';

import { searchMovieAction } from '../store/actions/dataAction';

const Searchbar = () => {
  const dispatch = useDispatch();
  const debounceDispatchSearch = debounce(1000, (val: string) =>
    dispatch(searchMovieAction(val)),
  );
  const debounceDispatchClear = debounce(200, () =>
    dispatch(searchMovieAction('')),
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    debounceDispatchSearch(value);
  };

  const handleOnBlur = () => {
    debounceDispatchClear();
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
