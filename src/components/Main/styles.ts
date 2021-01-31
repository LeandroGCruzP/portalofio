import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(1280px, 100%);
`;

export const Header = styled.div`
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 10px 13px 9px 13px;
  border-bottom: 1px solid var(--outline);
`;

export const Link = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;

  display: flex;
  flex: 1;
  justify-content: space-between;

  > strong {
    font-size: 1.2rem;

    cursor: pointer;
    transition: 0.13s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  width: 45%;
  height: 95vh;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25vh;
  padding-left: 5vw;
  z-index: 1;

  > strong {
    font-size: 7rem;
    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }

  > span {
    display: flex;
    justify-content: center;
    padding-top: 1vw;
    font-size: 22px;
    border-top: 4px solid var(--outline);
    border-radius: 25%;
  }

  &:last-child {
    border-bottom: 1px solid var(--outline);
  }
`;

export const Right = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: left;
  width: 55%;
`;

export const Picture = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: var(--outline);
`;
