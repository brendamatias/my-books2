import * as React from "react"
import { FaStar } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { Container, ScrollVertical } from "./styles"

const BookList = ({ title, books, type, handleDeleteButton, handleButton, withDescription = false }) => {
  const deleteBook = (book) => {
    let result = window.confirm("Tem certeza que deseja excluir o livro " + book.title + "? Essa ação não pode ser desfeita!");

    if (result) {
      handleDeleteButton(book, type);
    }
  }

  return (
    <Container>
      <strong>{title}</strong>

      {!withDescription ? (
        <ScrollVertical type={type}>
          {books && books.map((book) => (
            <li key={book.id}>
              <button type="button" onClick={() => handleButton(book)} className="image-button">
                <img src={book.image} />
              </button>
              <strong>{book.title}</strong>

              <span>{book.author}</span>

              <button className="remove-button" onClick={() => deleteBook(book)}>
                <MdClose />
              </button>
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
