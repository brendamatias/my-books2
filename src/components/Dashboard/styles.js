import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  > .container {
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    padding: 40px 60px;
    margin: 60px 0;
    background-color: ${props => props.theme.appSections};
    border-radius: 20px;

    &::-webkit-scrollbar {
      width: 8px;
      cursor: pointer;
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