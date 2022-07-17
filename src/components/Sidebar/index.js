import * as React from "react"
import { FaHome, FaThLarge, FaSignOutAlt } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoMdMoon } from "react-icons/io";

import { Container, SidebarWrapper } from "./styles"

const Sidebar = ({ page, setPage, handleLogout }) => {
  const links = [
    {
      id: 'home',
      label: 'Home',
      icon: <FaHome />
    },
    {
      id: 'my-books',
      label: 'Meus livros',
      icon: <ImBooks />
    },
    {
      id: 'recommendations',
      label: 'Recomendações',
      icon: <FaThLarge />
    },
  ];

  return (
    <Container>
      <div>
        <div>
          <a className="logo" href="#teste">mybooks</a>

          <SidebarWrapper>
            <div className="sidebar-title">MENU</div>

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
          </SidebarWrapper>
        </div>
      </div>

      <div className="footer">
        <div>
          <button type="button" onClick={() => handleLogout()}>
            <div className="icon"><FaSignOutAlt /></div>
            Sair
          </button>
        </div>

        <div className="dark-mode">
          <button type="button">
            <div className="icon"><IoMdMoon /></div>
            Light Mode
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Sidebar
