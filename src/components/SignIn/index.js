import * as React from "react"
import { MdMail, MdLock } from 'react-icons/md';
import { navigate } from "gatsby"

import { Login } from './styles';

const SignIn = ({ handleSignIn }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      name: 'Ciclano Beltrano',
      email,
    };

    handleSignIn(user);
  };

  return (
    <Login>
      <div className="content">
        <h1>My Books!</h1>
        <h3>Admin - v1.0.0</h3>

        <form onSubmit={handleSubmit}>
          <div className="form">
            <div>
              <label htmlFor="email">
                Email
              </label>

              <div>
                <MdMail />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password">
                Senha
              </label>

              <div>
                <MdLock />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <a href="#teste">Forgot password?</a>

          <button type="submit">Entrar</button>
        </form>
      </div>

      <div className="banner" />
    </Login>
  )
}

export default SignIn;
