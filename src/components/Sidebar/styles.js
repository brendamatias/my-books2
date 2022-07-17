import styled from 'styled-components'

export const Container = styled.section`
  border-right: 1px solid #181720;
  padding: 60px 40px;

  > div {
    .logo {
      font-size: 19px;
      font-weight: 600;
    }
  }

  > .footer {
    margin-top: calc(100vh - 575px);

    button {
      display: flex;
      align-items: center;
      gap: 16px;
      color: #808191;
      font-weight: 600;
      background-color: transparent;
      padding: 0;
      margin-top: 30px;

      > .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        padding: 8px;
        border-radius: 10px;
        flex-shrink: 0;
        color: #808191;

        svg {
          font-size: 14px;
        }
      }
    }
  }
`;

export const SidebarWrapper = styled.div`
  padding: 60px 0;

  & .sidebar-title {
    font-size: 12px;
    letter-spacing: 0.07em;
    margin-bottom: 24px;
    color: #979DAB;
  }

  > ul {
    display: flex;
    flex-direction: column;
    gap: 30px;

    > li {
      > button {
        display: flex;
        align-items: center;
        gap: 16px;
        color: #808191;
        font-weight: 600;
        background-color: transparent;
        padding: 0;

        > .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          padding: 8px;
          border-radius: 10px;
          background-color: #353340;
          flex-shrink: 0;
          color: #808191;
          svg {
            font-size: 14px;
          }
        }
      }

      &:hover, &.active {
        & button {
          color: #fff;
        }

        &:nth-child(2n + 1) .icon {
          background-color: #ff7551;
          color: #fff;
        }

        &:nth-child(2n) .icon {
          background-color: #32a7e2;
          color: #fff;
        }

        &:nth-child(2n + 3) .icon {
          background: #6c5ecf;
          color: #fff;
        }
      }
    }
  }
`;