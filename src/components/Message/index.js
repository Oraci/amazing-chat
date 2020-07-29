import React from 'react';

import { Container, Content, Text, Msg } from './styles';

function Message({ send, message }) {
  return (
    <Container send={send}>
      <Content>
        {!send && <Text>Ninja</Text>}
        <Msg>{message}</Msg>
        <Text>10 Mar 2018 10:10</Text>
      </Content>
    </Container>
  );
}

export default Message;
