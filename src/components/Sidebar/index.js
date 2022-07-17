import * as React from "react"
import { FaHome, FaThLarge, FaSignOutAlt } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

import { Container, SidebarWrapper } from "./styles"

const Sidebar = ({ page, setPage, handleLogout, toggleTheme }) => {
  const [theme, setTheme] = React.useState('dark');

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
          <button type="button" onClick={() => toggleTheme()}>
            <div className="icon">
              {theme === 'dark' ? <IoMdSunny /> : <IoMdMoon />}
            </div>

            {theme === 'dark' ? 'Light' : 'Dark'} Mode
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Sidebar
