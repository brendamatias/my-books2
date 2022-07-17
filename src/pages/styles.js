import styled from 'styled-components'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr 280px;
  height: 100vh;

  > .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    overflow-y: auto;
    padding: 40px 100px 40px 100px;

    &::-webkit-scrollbar {
      width: 8px;
      cursor: pointer;
    }

    &::-webkit-scrollbar-track {
      background-color: #252836;
    }

    &::-webkit-scrollbar-thumb {
      background: #181720;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #111;
    }
  }
`;