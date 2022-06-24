import { IBook } from 'interfaces/api/books';

import { API } from '.';

const API_BOOKS = 'books';

export const getBooks = (): Promise<{ data: { books: IBook[] } }> => {
  return API.get(API_BOOKS);
};

export const findBooksByQuery = (queryString: string): Promise<{ data: { books: IBook[] } }> => {
  return API.get(`${API_BOOKS}?q=${queryString}`);
};
