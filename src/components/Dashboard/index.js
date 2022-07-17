import * as React from "react"
import Sidebar from '../Sidebar';
import SidebarSecondary from '../SidebarSecondary';
import Home from './Home';
import MyBooks from './MyBooks';

import { Wrapper } from './styles';
import {
  LOCAL_STORAGE_READ_BOOKS,
  LOCAL_STORAGE_WISHLIST,
  LOCAL_STORAGE_UNREAD_BOOKS
} from '../../utils/constants';

const Dashboard = ({ handleLogout, toggleTheme }) => {
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
    <Wrapper>
      <title>Books</title>
      <Sidebar toggleTheme={toggleTheme} page={page} setPage={setPage} handleLogout={handleLogout} />

      <div className="container">
        {page === 'home' && <Home unreadBooks={unreadBooks} />}
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
  );
}

export default Dashboard;
