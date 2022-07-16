import * as React from "react"
import { Main, ReadBooks, ScrollVertical } from './styles'
import { MdSearch, MdClose } from 'react-icons/md'
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"

const BOOK_API = 'https://www.googleapis.com/books/v1/volumes?q='

const Dashboard = () => {
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
    <>
      <Main>
        <title>Books</title>
        <h1>
          Meus livros 📖
        </h1>
        <div className="content">
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

          <div className="flex">
            <ScrollVertical type="unread">
              <strong>📕 Não lidos</strong>

              <ul>
                {unreadBooks && unreadBooks.map((book) => (
                  <li key={book.id}>
                    <div>
                      <div className="image-container">
                        <div className="remove-button">
                          <button type="button" onClick={() => deleteBook(book, 'unread')}><MdClose /></button>
                        </div>
                        <button type="button" onClick={() => setRead(book)}>
                          <img src={book.image} />
                        </button>
                      </div>

                      <strong>{book.title}</strong>
                      <span>{book.author}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollVertical>

            <ScrollVertical type="to-buy">
              <strong>📗 Quero comprar</strong>

              <ul>
                {toBuyBooks.map((book) => (
                  <li key={book.id}>
                    <div>
                      <div className="image-container">
                        <div className="remove-button">
                          <button type="button"><MdClose /></button>
                        </div>
                        <button type="button">
                          <img src="https://i.harperapps.com/covers/9780062698162/x510.jpg" />
                        </button>
                      </div>

                      <strong>{book.title}</strong>
                      <span>{book.author}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollVertical>
          </div>

          <ReadBooks>
            <strong>📘 Lidos</strong>

            <ul>
              {readBooks.map((book) => (
                <li key={book.id}>
                  <div>
                    <div className="remove-button">
                      <button type="button" onClick={() => deleteBook(book, 'readeds')}><MdClose /></button>
                    </div>
                    <img src={book.image} />

                    <div>
                      <strong>{book.title}</strong>
                      <span>{book.author}</span>

                      <div>⭐⭐⭐⭐⭐</div>

                      <p>{book.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </ReadBooks>
        </div>
      </Main>
      <ToastContainer autoClose={5000} theme="colored" />
    </>
  )
}

export default Dashboard
