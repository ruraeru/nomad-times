import { IBookList } from "../app/(home)/page";

export default function useSortingList(bookList: IBookList, sortChar: string) {
  if (sortChar === null) return bookList;
  return bookList.results.filter(
    (book) => book.display_name[0].toUpperCase() === sortChar
  );
}
