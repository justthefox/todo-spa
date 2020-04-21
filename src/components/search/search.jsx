import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import SearchInput from 'react-search-input';
import { setSearchValueAction } from '../../store/actions';
import './search.scss';

const Search = () => {
  const dispatch = useDispatch();

  const setSearchValue = useCallback(
    (value) => {
      dispatch(setSearchValueAction(value));
    },
    [dispatch],
  );

  return (
    <SearchInput
      placeholder="Поиск..."
      onChange={setSearchValue}
      className="search"
    />
  );
};

export default Search;
