import React from 'react';

import { Container, Header, Link, ProfileInfo, Content, Left, Right } from './styles';

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
          <h1>Picture</h1>
        </Right>
      </Content>
    </Container>
  );
};

export default Main;
