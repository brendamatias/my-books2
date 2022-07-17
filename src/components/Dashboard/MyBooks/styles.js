import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  > .content {
    margin-top: 40px;

    > div {
      margin-bottom: 20px;
    }
  }

  > .search-container {
    position: relative;
    background-color: ${props => props.theme.bgInput};
    border-radius: 4px;

    > .search-input {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 10px 20px;

      > svg {
        font-size: 20px;
        color: #556479;
      }
    }

    > .search-dropdown {
      position: absolute;
      background-color: ${props => props.theme.bgInput};
      top: 46px;
      border-radius: 4px;
      width: 100%;
      max-height: 240px;
      overflow: hidden;
      overflow-y: auto;
      z-index: 999999999;

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

      > ul > li > button {
        font-size: 14px;
        padding: 10px 20px;
        width: 100%;
        text-align: left;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: ${props => props.theme.bgInput};
        color: ${props => props.theme.mainColor};

        > img {
          width: 30px;
        }

        &:hover {
          background-color: ${props => props.theme.mainHover};
        }
      }
    }
  }
`;