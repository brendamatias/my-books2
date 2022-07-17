import * as React from "react"
import { FaStar } from 'react-icons/fa';
import { Container, ScrollVertical } from "./styles"

const BookList = ({ title, books, withDescription = false }) => {
  return (
    <Container>
      <strong>{title}</strong>

      {!withDescription ? (
        <ScrollVertical>
          {books && books.map((book) => (
            <li key={book.id}>
              <img src={book.image} />
              <strong>{book.title}</strong>

              <span>{book.author}</span>
            </li>
          ))}
        </ScrollVertical>
      ) : (
        <ul className="book-list">
          {books && books.map((book) => (
            <li key={book.id}>
              <img src={book.image} />

              <div>
                <strong>{book.title}</strong>
                <span>{book.author}</span>

                <div className="rating">
                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index}>
                      <FaStar />
                    </div>
                  ))}
                </div>

                <p>{book.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

    </Container>
  )
}

export default BookList
