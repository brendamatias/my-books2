import * as React from "react"
import { Container } from "./styles"
import { ImTrophy } from 'react-icons/im';
import { MdBookmark, MdMenuBook } from 'react-icons/md';

const SidebarSecondary = ({ wishListCount, readCount}) => {
  return (
    <Container>
      <div className="avatar"></div>
      <strong>Brenda Matias</strong>
      <span>brenda@gmail.com</span>

      <div className="pages-read">
        <ImTrophy />
        <strong>500+<br />Páginas Lidas</strong>
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((author => (
            <li key={author}>
              <div className="image"></div>
              <div>
                <strong>Stephen King</strong>
                <span>120 books</span>
              </div>
            </li>
          )))}
        </ul>
      </div>
    </Container>
  )
}

export default SidebarSecondary
