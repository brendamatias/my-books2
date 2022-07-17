import * as React from "react"
import { Container } from "./styles"
import { FaUser } from 'react-icons/fa';
import { ImTrophy } from 'react-icons/im';
import { MdBookmark, MdMenuBook } from 'react-icons/md';
import { navigate } from "gatsby"

const SidebarSecondary = ({ wishListCount, readCount, readBooks }) => {
  const [pagesRead, setPageReads] = React.useState(0);
  const [authors, setAuthors] = React.useState([]);
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    let pageReadsCount = 0;
    let authorsArray = [];

    readBooks.forEach((book) => {
      pageReadsCount = pageReadsCount + (book.page_count || 0);
      authorsArray[book.author] = (authorsArray[book.author] || 0) + 1;
    });

    setPageReads(pageReadsCount);
    setAuthors(authorsArray);
  }, [readBooks]);

  React.useEffect(() => {
    const currentUser = localStorage.getItem('my-books');

    setUser(JSON.parse(currentUser));
  }, []);

  return (
    <Container>
      <div className="avatar"></div>
      <strong>{user.name}</strong>
      <span>{user.email}</span>

      <div className="pages-read">
        <ImTrophy />
        <strong>{pagesRead}+<br />Páginas Lidas</strong>
      </div>

      <div className="info">
        <div>
          <div className="icon">
            <MdBookmark />
          </div>
          <div>
            <strong>Wishlist</strong>
            <span>{wishListCount} books</span>
          </div>
        </div>

        <div>
          <div className="icon">
            <MdMenuBook />
          </div>
          <div>
            <strong>Read</strong>
            <span>{readCount} books</span>
          </div>
        </div>
      </div>

      <div className="authours-read">
        <strong>Authors Read</strong>

        <ul>
          {Object.keys(authors).map(((item) => (
            <li key={item}>
              <div className="icon">
                <FaUser />
              </div>
              <div>
                <strong>{item}</strong>
                <span>{authors[item]} book {authors[item] > 1 && 's'} read</span>
              </div>
            </li>
          )))}
        </ul>
      </div>
    </Container>
  )
}

export default SidebarSecondary
