import React from 'react';

import { Container, Content, Text, Msg } from './styles';

function Message({ isMine, message, username }) {
  return (
    <Container isMine={isMine}>
      <Content>
        {!isMine && <Text>{username}</Text>}
        <Msg>{message}</Msg>
        <Text>10 Mar 2018 10:10</Text>
      </Content>
    </Container>
  );
}

export default Message;
