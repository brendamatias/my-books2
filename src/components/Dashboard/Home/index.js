import * as React from "react"
import BookList from "../../BookList"
import { Container } from "./styles"

const Home = ({ unreadBooks }) => {
  return (
    <Container>
      <div className="banner">
        <h1>Hi Brenda!</h1>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

        <button type="button">Browser Latest</button>
      </div>

      <BookList title="Não Lidos" books={unreadBooks} />
    </Container>
  )
}

export default Home
