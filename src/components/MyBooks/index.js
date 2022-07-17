import * as React from "react"
import { Container } from './styles'
import { MdSearch } from 'react-icons/md'
import axios from "axios"
import { toast } from "react-toastify"
import BookList from "../BookList"

const BOOK_API = 'https://www.googleapis.com/books/v1/volumes?q='

const MyBooks = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [foundBooks, setFoundBooks] = React.useState([]);
  const [readBooks, setReadBooks] = React.useState([]);
  const [unreadBooks, setUnreadBooks] = React.useState([]);
  const [toBuyBooks, setToBuyBooks] = React.useState([]);

  const localStorageReadBooks = 'read_books_app';
  const localStorageUnreadBooks = 'unread_books_app';
  const localStorageToBuyBooks = 'to_buy_books_app';

  const setNewBook = (book, type) => {
    const hasBook = unreadBooks.findIndex((item) => item.id === book.id);

    if (hasBook >= 0) return toast.error('Livro já adicionado');

    const newBook = {
      id: book.id,
      author: book.volumeInfo?.authors?.[0] || 'Autor não encontrado',
      title: book.volumeInfo?.title,
      description: book.volumeInfo?.description || 'Descrição não encontrada',
      image: book.volumeInfo?.imageLinks?.thumbnail
    }

    console.log('[NEW UNREAD BOOK] - ', newBook);
    const currentUnredBooks = [...unreadBooks, newBook]

    // setReadBooks(currentUnredBooks);
    setUnreadBooks(currentUnredBooks);
    // setToBuyBooks(currentUnredBooks);
    setSearchTerm('');

    localStorage.setItem(localStorageUnreadBooks, JSON.stringify(currentUnredBooks));
  }

  const deleteBook = (book, type) => {
    const currentBooks = type === 'unread' ? [...unreadBooks] : type === 'readeds' ? [...readBooks] : [...toBuyBooks];
    const indexBook = currentBooks.findIndex((item) => item.id === book.id);
    console.log('[REMOVE BOOK] - ', currentBooks[indexBook]);

    currentBooks.splice(indexBook, 1);

    if (type === 'unread') {
      setUnreadBooks(currentBooks);
      localStorage.setItem(localStorageUnreadBooks, JSON.stringify(currentBooks));
    } else if (type === 'readeds') {
      setReadBooks(currentBooks);
      localStorage.setItem(localStorageReadBooks, JSON.stringify(currentBooks));
    } else {
      setToBuyBooks(currentBooks);
      localStorage.setItem(localStorageToBuyBooks, JSON.stringify(currentBooks));
    }
  }

  const getBooks = async () => {
    if (!searchTerm) return setFoundBooks([]);
    const searchTermFormatted = searchTerm.replace(/ /g, '+');

    return axios.get(BOOK_API + searchTermFormatted).then(({ data }) => (
      setFoundBooks(data.items)
    ));
  }

  const setRead = (book) => {
    const currentBooks = [...readBooks, book];
    localStorage.setItem(localStorageReadBooks, JSON.stringify(currentBooks));

    setReadBooks(currentBooks);
    deleteBook(book, 'unread');
  }

  React.useEffect(() => {
    const unreads = localStorage.getItem(localStorageUnreadBooks);
    const readeds = localStorage.getItem(localStorageReadBooks);

    setUnreadBooks(unreads && JSON.parse(unreads) || []);
    setReadBooks(readeds && JSON.parse(readeds) || []);
  }, []);

  React.useEffect(() => {
    getBooks();
  }, [searchTerm]);

  return (
    <Container>
      <h1>
        Meus livros 📖
      </h1>
      <div className="search-container">
        <div className="search-input">
          <input placeholder="Adicionar livro..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <MdSearch />
        </div>

        <div className="search-dropdown">
          <ul>
            {foundBooks && foundBooks.map((book) => (
              <li key={book.id}>
                <button type="button" onClick={() => setNewBook(book)}>
                  <img src={book.volumeInfo?.imageLinks?.thumbnail} /> {book.volumeInfo?.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="content">
        <div>
          <BookList title="Não Lidos" books={unreadBooks} />
        </div>
        <div>
          <BookList title="Quero comprar" books={toBuyBooks} />
        </div>
        <div>
          <BookList title="Lidos" books={readBooks} withDescription />
        </div>
      </div>
    </Container>
  )
}

export default MyBooks
