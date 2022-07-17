import * as React from "react"
import { MdHouseSiding, MdBook } from "react-icons/md";
import { Container } from "./styles"

const Sidebar = ({ page, setPage }) => {
  const links = [
    {
      id: 'home',
      label: 'Home',
      icon: <MdHouseSiding />
    },
    {
      id: 'my-books',
      label: 'Meus livros',
      icon: <MdBook />
    },
    {
      id: 'teste',
      label: 'Teste',
      icon: <MdHouseSiding />
    },
  ];

  return (
    <Container>
      <a class="logo" href="#">mybooks</a>

      <div className="sidebar">
        <div class="sidebar-title">MENU</div>

        <ul>
          {links.map((link) => (
            <li key={link.id} className={`${link.id === page && 'active'}`}>
              <button type="button" onClick={() => setPage(link.id)}>
                <div className="icon">{link.icon}</div>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default Sidebar
