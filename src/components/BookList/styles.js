import styled from 'styled-components'

export const Container = styled.section`
  > strong {
    display: block;
    font-size: 13px;
    margin-bottom: 20px;
  }

  > ul {
    strong {
      color: #fff;
      font-size: 14px;
      line-height: 1.4em;
      margin: 12px 0 4px 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    span {
      font-size: 12px;
      color: #808191;
      margin: 0;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    img {
      height: 220px;
      width: 145px;
      border-radius: 8px;
    }
  }

  > .book-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;

    > li {
      display: flex;
      align-items: flex-start;
      gap: 2rem;

      > div {
        > strong {
          margin-top: 0;
        }

        > p {
          max-width: 600px;
          text-align: justify;
          display: -webkit-box;
          overflow: hidden;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          margin: 10px 0 0 0;
          font-size: 13px;
          opacity: 0.8;
        }

        > .rating {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 8px;

          svg {
            font-size: 16px;
            color: #FFCF00;
          }
        }
      }
    }
  }
`;

export const ScrollVertical = styled.ul`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  z-index: 999;
  padding-bottom: 20px;

  &::-webkit-scrollbar {
    height: 8px;
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

  > li {
    display: flex;
    flex-direction: column;
    min-width: 145px;
    width: 145px;
  }
`;