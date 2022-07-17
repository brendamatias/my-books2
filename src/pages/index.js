import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/open-sans';
import * as React from "react"
import { ToastContainer } from "react-toastify"
import Sidebar from '../components/Sidebar';
import SidebarSecondary from '../components/SidebarSecondary';
import Dashboard from '../components/Dashboard';
import MyBooks from '../components/MyBooks';

import { Wrapper } from './styles';
import {
  LOCAL_STORAGE_READ_BOOKS,
  LOCAL_STORAGE_WISHLIST,
  LOCAL_STORAGE_UNREAD_BOOKS
} from '../utils/constants';

const IndexPage = () => {
  const [page, setPage] = React.useState('home');
  const [readBooks, setReadBooks] = React.useState([]);
  const [unreadBooks, setUnreadBooks] = React.useState([]);
  const [wishlist, setWishList] = React.useState([]);

  const getBooks = async () => {
    const readBooksUnformatted = localStorage.getItem(LOCAL_STORAGE_READ_BOOKS);
    const unreadBooksUnformatted = localStorage.getItem(LOCAL_STORAGE_UNREAD_BOOKS);
    const wishlistUnformatted = localStorage.getItem(LOCAL_STORAGE_WISHLIST);

    setReadBooks(readBooksUnformatted && JSON.parse(readBooksUnformatted) || []);
    setUnreadBooks(unreadBooksUnformatted && JSON.parse(unreadBooksUnformatted) || []);
    setWishList(wishlistUnformatted && JSON.parse(wishlistUnformatted) || []);
  }

  React.useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <Wrapper>
        <title>Books</title>
        <Sidebar page={page} setPage={setPage} />

        <div className="container">
          {page === 'home' && <Dashboard unreadBooks={unreadBooks} />}
          {page === 'my-books' &&
            <MyBooks
              readBooks={readBooks}
              setReadBooks={setReadBooks}
              unreadBooks={unreadBooks}
              setUnreadBooks={setUnreadBooks}
              wishlist={wishlist}
              setWishList={setWishList}
            />
          }
        </div>

        <SidebarSecondary wishListCount={wishlist.length} readCount={readBooks.length} readBooks={readBooks} />
      </Wrapper>
      <ToastContainer autoClose={5000} theme="colored" />
    </>
  )
}

export default IndexPage;
