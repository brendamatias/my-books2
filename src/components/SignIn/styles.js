import styled from 'styled-components'
import bgLogin from '../../images/bg-login.svg';

export const Login = styled.section`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  height: 100vh;
  background-color: #fff;

  > .banner {
    background-color: #FFCB05;
    background-image: url(${bgLogin});
    background-position: right bottom;
    background-size: 600px;
    background-repeat: no-repeat;
  }

  > .content {
    padding: 80px 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    > h1 {
      text-align: center;
      margin: 0 auto;
      color: #050941;
      font-size: 40px;
    }

    > h3 {
      font-size: 13px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 60px;
      margin-top: 10px;
      color: #808191;
    }

    > form {
      .form > div {
        > label {
          display: block;
          font-size: 14px;
          margin-bottom: 8px;
          color: #050941;
        }

        > div {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 10px 20px;
          background-color: #EDF2F4;
          border-radius: 4px;

          > input {
            width: 100%;
            font-size: 14px;
            color: #050941;
            background-color: transparent;
            border: 0;
          }

          svg {
            color: #272B53;
          }
        }

        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }

      > a {
        font-size: 12px;
        color: #808191;
        margin-top: 10px;
        display: inline-block;
      }

      > button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        background-color: #FFCB05;
      }
    }
  }

`;