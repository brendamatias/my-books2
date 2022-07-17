import './styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fontsource/open-sans';

import * as React from "react"
import { ToastContainer } from "react-toastify"

import SignIn from '../components/SignIn';
import Dashboard from '../components/Dashboard';

const IndexPage = () => {
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

  return (
    <main>
      <title>Books</title>

      {isAuthenticated ? <Dashboard handleLogout={handleLogout} /> : <SignIn handleSignIn={handleSignIn} />}

      <ToastContainer autoClose={5000} theme="colored" />
    </main>
  )
}

export default IndexPage;
