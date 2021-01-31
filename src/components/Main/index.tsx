import React from 'react';

import { Container, Header, Link, ProfileInfo, Content, Left, Right, Picture } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link>
          <strong>About Me</strong>
          <strong>Projects</strong>
          <strong>Contact</strong>
        </Link>
      </Header>
      <Content>
        <Left>
          <ProfileInfo>
            <strong>Leandro</strong>
            <strong>Cruz</strong>
            <span>Computer Enginner</span>
          </ProfileInfo>
        </Left>
        <Right>
          <Picture>
            <img src="" alt="" />
          </Picture>
        </Right>
      </Content>
    </Container>
  );
};

export default Main;
