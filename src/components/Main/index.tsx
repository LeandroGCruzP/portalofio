import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Leandro Cruz</strong>
          <span>200 QI</span>
        </ProfileInfo>

        {/* <BottomMenu>
          <HomeIcon />
          <SearchIcon />
          <BellIcon />
          <EmailIcon />
        </BottomMenu> */}
      </Header>
    </Container>
  );
};

export default Main;
