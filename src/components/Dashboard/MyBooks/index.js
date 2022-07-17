import * as React from "react"
import { Container } from './styles'
import { MdSearch } from 'react-icons/md'
import axios from "axios"
import { toast } from "react-toastify"
import BookList from "../../BookList"
import { LOCAL_STORAGE_READ_BOOKS, LOCAL_STORAGE_UNREAD_BOOKS, LOCAL_STORAGE_WISHLIST } from "../../../utils/constants"

const BOOK_API = 'https://www.googleapis.com/books/v1/volumes?q='

const MyBooks = ({
  readBooks,
  setReadBooks,
  unreadBooks,
  setUnreadBooks,
  wishlist,
  setWishList
}) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [foundBooks, setFoundBooks] = React.useState([]);

  const setNewBook = (book, type) => {
    const hasBook = unreadBooks.findIndex((item) => item.id === book.id);

    if (hasBook >= 0) return toast.error('Livro já adicionado');

    const newBook = {
      id: book.id,
      author: book.volumeInfo?.authors?.[0] || 'Autor não encontrado',
      title: book.volumeInfo?.title,
      description: book.volumeInfo?.description || 'Descrição não encontrada',
      page_count: book.volumeInfo?.pageCount,
      image: book.volumeInfo?.imageLinks?.thumbnail
    }

    console.log('[NEW UNREAD BOOK] - ', newBook);
    const currentUnredBooks = [...unreadBooks, newBook]

    setUnreadBooks(currentUnredBooks);
    setReadBooks(currentUnredBooks);
    setWishList(currentUnredBooks);
    setSearchTerm('');

    localStorage.setItem(LOCAL_STORAGE_READ_BOOKS, JSON.stringify(currentUnredBooks));
    localStorage.setItem(LOCAL_STORAGE_UNREAD_BOOKS, JSON.stringify(currentUnredBooks));
    localStorage.setItem(LOCAL_STORAGE_WISHLIST, JSON.stringify(currentUnredBooks));
  }

  const deleteBook = (book, type) => {
    const currentBooks = type === 'unread' ? [...unreadBooks] : type === 'readeds' ? [...readBooks] : [...wishlist];
    const indexBook = currentBooks.findIndex((item) => item.id === book.id);
    console.log('[REMOVE BOOK] - ', currentBooks[indexBook]);

    currentBooks.splice(indexBook, 1);

    if (type === 'unread') {
      setUnreadBooks(currentBooks);
      localStorage.setItem(LOCAL_STORAGE_UNREAD_BOOKS, JSON.stringify(currentBooks));
    } else if (type === 'readeds') {
      setReadBooks(currentBooks);
      localStorage.setItem(LOCAL_STORAGE_READ_BOOKS, JSON.stringify(currentBooks));
    } else {
      setWishList(currentBooks);
      localStorage.setItem(LOCAL_STORAGE_WISHLIST, JSON.stringify(currentBooks));
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
    localStorage.setItem(LOCAL_STORAGE_READ_BOOKS, JSON.stringify(currentBooks));

    setReadBooks(currentBooks);
    deleteBook(book, 'unread');
  }

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
          <BookList title="Quero comprar" books={wishlist} />
        </div>
        <div>
          <BookList title="Lidos" books={readBooks} withDescription />
        </div>
      </div>
    </Container>
  )
}

export default MyBooks
