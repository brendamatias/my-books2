import styled from 'styled-components'

export const Login = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => props.theme.appSections};

  > .content {
    padding: 80px 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 650px;

    > h1 {
      text-align: center;
      margin: 0 auto;
      font-size: 40px;
    }

    > h3 {
      font-size: 13px;
      font-weight: 400;
      text-align: center;
      margin-bottom: 60px;
      margin-top: 10px;
      color: ${props => props.theme.secondaryColor};
    }

    > form {
      .form > div {
        > label {
          display: block;
          font-size: 14px;
          margin-bottom: 8px;
          color: ${props => props.theme.mainColor};
        }

        > div {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 10px 20px;
          background-color: ${props => props.theme.bgInput};
          border-radius: 4px;

          svg {
            color: ${props => props.theme.mainColor};
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
      }
    }
  }

`;