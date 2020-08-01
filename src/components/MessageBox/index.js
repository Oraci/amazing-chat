import React from 'react';

import { Container, Content, Text, Msg } from './styles';

function Message({ isMine, message, username, timestamp }) {
  return (
    <Container isMine={isMine}>
      <Content>
        {!isMine && <Text>{username}</Text>}
        <Msg>{message}</Msg>
        <Text>{timestamp}</Text>
      </Content>
    </Container>
  );
}

export default Message;
