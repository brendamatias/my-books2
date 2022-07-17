import styled from 'styled-components'

export const Container = styled.section`
  border-left: 1px solid #181720;
  padding: 60px 0;
  text-align: center;

  > .avatar {
    width: 50px;
    height: 50px;
    background-color: #111;
    border-radius: 50%;
    margin: 0 auto 10px auto;
  }

  > strong {
    font-size: 14px;
  }

  > span {
    display: block;
    font-size: 12px;
    color: #808191;
  }

  > .pages-read {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0 40px 0;

    > svg {
      font-size: 40px;
    }

    > strong {
      font-size: 12px;
      margin-top: 10px;
    }
  }

  > .info {
    border-top: 1px solid #181720;
    border-bottom: 1px solid #181720;
    padding: 40px;

    > div {
      display: flex;
      text-align: left;
      gap: 0.8rem;

      &:not(:last-child) {
        margin-bottom: 30px;
      }

      .icon {
        background-color: #252836;
        padding: 15px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      > div > strong {
        font-size: 13px;
      }

      > div > span {
        font-size: 10px;
        display: block;
        color: #808191;
      }
    }
  }

  > .authours-read {
    background-color: #252836;
    margin: 40px 40px 0 40px;
    padding: 15px 0 15px 15px;
    text-align: left;
    border-radius: 8px;

    > strong {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }

    > ul {
      height: calc(100vh - 662px);
      overflow: hidden;
      overflow-y: auto;

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

      > li {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        &:not(:last-child) {
          margin-bottom: 10px;
        }

        > .image {
          width: 40px;
          height: 40px;
          background-color: #111;
          border-radius: 50%;
        }

        strong {
          font-size: 12px;
        }

        span {
          display: block;
          font-size: 10px;
        }
      }
    }
  }
`;