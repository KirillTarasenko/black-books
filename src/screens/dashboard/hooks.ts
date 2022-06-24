import throttle from 'lodash/throttle';
import { useRef, useCallback, useEffect, useState } from 'react';

import { findBooksByQuery, getBooks } from 'api/books';
import { IBook } from 'interfaces/api/books';
const DELAY_CALL_API = 2000;

export const useBooksData = () => {
  const [books, setBooks]: [IBook[], (books) => void] = useState([]);
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBooks().then(data => {
      setBooks(data.data.books);
    });
  }, []);

  const handleClear = useCallback(() => {
    setSpinnerVisibility(false);
    setFilterText('');
  }, []);
  const throttled = useRef(
    throttle(query => {
      findBooksByQuery(query)
        .then(result => {
          setBooks(result.data.books);
        })
        .finally(() => {
          setLoading(false);
          setSpinnerVisibility(false);
        });
    }, DELAY_CALL_API),
  );
  useEffect(() => {
    setSpinnerVisibility(true);
    setLoading(true);
    throttled.current(filterText);
  }, [setSpinnerVisibility, filterText]);

  return { handleClear, books, spinnerVisibility, loading, setFilterText };
};
