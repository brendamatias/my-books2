import styled from 'styled-components'

export const Main = styled.main`
  font-family: "Open Sans";
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 100px 40px 100px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    border: 0;
    background-color: transparent;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  .content {
    > div {
      margin-top: 30px;
    }

    > .search-container {
      position: relative;

      > .search-input {
        display: flex;
        align-items: center;
        gap: 1rem;
        box-shadow: 0 0 30px 5px #dedede;
        padding: 10px 20px;
        border-radius: 4px;

        > svg {
          font-size: 20px;
          color: #556479;
        }

        > input {
          width: 100%;
          border: 0;
          font-size: 14px;
          font-family: "Open Sans";
          color: #222;

          &:focus {
            outline: none;
          }
        }
      }

      > .search-dropdown {
        position: absolute;
        background-color: #fff;
        top: 46px;
        border-radius: 4px;
        width: 100%;
        box-shadow: 40px 40px 80px 10px #9e9e9e;
        max-height: 240px;
        overflow: hidden;
        overflow-y: auto;
        z-index: 999;

        /* width */
        &::-webkit-scrollbar {
          width: 8px;
          cursor: pointer;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          background: #f5f5f5;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #556479;
          border-radius: 11px;
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #392060;
        }

        > ul > li > button {
          color: #222;
          font-size: 14px;
          padding: 10px 20px;
          width: 100%;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1rem;

          > img {
            width: 30px;
          }

          &:hover {
            background-color: #dedede;
          }
        }
      }
    }

    > .flex {
      display: grid;
      grid-template-columns: repeat(2, 534px);
      gap: 2rem;
    }
  }

  .remove-button {
    position: absolute;
    z-index: 1;
    background-color: #fff;
    top: -6px;
    right: -6px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    box-shadow: 1px 1px 2px #dedede;

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #6D1E27;
      cursor: pointer;
      width: 100%;
      height: 100%;
    }
  }
`;

export const ScrollVertical = styled.div`
  > strong {
    font-size: 24px;
    color: #556479;
    font-weight: 900;
  }

  > ul {
    display: flex;
    gap: 2rem;
    overflow-y: scroll;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    margin-top: 20px;
    border: 1px solid #efefef;
    height: 267px;
    overflow-x: auto;
    padding: 10px 10px 15px 15px;
    border-radius: 4px;

    /* width */
    &::-webkit-scrollbar {
      height: 8px;
      cursor: pointer;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f5f5f5;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #556479;
      border-radius: 11px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #392060;
    }

    > li {
      > div {
        display: flex;
        flex-direction: column;
        width: 130px;

        > .image-container {
          position: relative;

          > button {
            position: relative;
            transition: all 0.3s;

            &:hover img {
              opacity: 0.5;
            }

            &::after {
              content: '${props => props.type === 'unread' ? 'Marcar como lido' : 'Marcar como comprado'}';
              display: none;
              background-color: ${props => props.type === 'unread' ? '#0071B7' : '#007C4B'};
              width: 100%;
              position: absolute;
              right: 0;
              color: #fff;
              top: calc(50% - 24px);
              font-family: 'Open Sans';
              font-size: 12px;
              padding: 10px 0;
              font-weight: 600;
            }

            &:hover::after {
              display: inline-block;
            }

            > img {
              width: inherit;
              min-height: 180px;
              height: 180px;
              border-radius: 4px;
              margin-bottom: 4px;
            }
          }
        }

        > strong {
          color: #556479;
          font-size: 14px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        > span {
          color: #B2B2B2;
          font-size: 10px;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
`;

export const ReadBooks = styled.div`
  > strong {
    font-size: 24px;
    color: #556479;
    font-weight: 900;
  }

  > ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-top: 20px;

    > li {
      position: relative;

      > div {
        display: flex;
        gap: 1rem;

        > img {
          min-width: 120px;
          max-width: 120px;
          height: 180px;
          border-radius: 4px;
        }

        > div {
          > strong {
            display: block;
            color: #556479;
            font-size: 14px;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }

          > span {
            display: block;
            color: #B2B2B2;
            font-size: 10px;
            margin: 0;
            padding: 0;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }

          > p {
            max-width: 600px;
            text-align: justify;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 6;
            -webkit-box-orient: vertical;
            margin: 10px 0 0 0;
            font-size: 14px;
          }

          > div {
            margin-top: 10px;
          }
        }
      }
    }
  }
`;