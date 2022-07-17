import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/open-sans';

import * as React from "react"
import { ToastContainer } from "react-toastify"

import SignIn from '../components/SignIn';
import Dashboard from '../components/Dashboard';
import { ThemeProvider } from 'styled-components';
import { dark, light } from '../styles/themes';
import GlobalStyle from '../styles/Global';

const IndexPage = () => {
  const [theme, setTheme] = React.useState('dark');
  const [user, setUser] = React.useState({});
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const currentUser = localStorage.getItem('my-books');

    setIsAuthenticated(!!currentUser);
    setUser(currentUser && JSON.parse(currentUser) || []);
  }, []);

  React.useEffect(() => {
    setIsAuthenticated(!!user.email);
  }, [user]);

  const handleSignIn = (data) => {
    localStorage.setItem('my-books', JSON.stringify(data));
    setUser(data);
  };

  const handleLogout = () => {
    localStorage.removeItem('my-books');
    setUser({});
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <main>
      <title>Books</title>

      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        {isAuthenticated ? <Dashboard handleLogout={handleLogout} toggleTheme={toggleTheme} /> : <SignIn handleSignIn={handleSignIn} />}
        <ToastContainer autoClose={5000} theme="colored" />
        <GlobalStyle />

      </ThemeProvider>
    </main>
  )
}

export default IndexPage;
