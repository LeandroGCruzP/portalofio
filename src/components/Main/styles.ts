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
  margin-left: 100px;
  margin-right: 100px;

  display: flex;
  flex: 1;
  justify-content: space-between;

  > strong {
    font-size: 22px;

    cursor: pointer;
    transition: 0.13s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Left = styled.div`
  display: flex;
  width: 30%;
  height: 100vh;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  > strong {
    font-size: 70px;
  }

  > span {
    font-size: 22px;
  }
`;

export const Right = styled.div`
  display: flex;
  width: 70%;
`;
