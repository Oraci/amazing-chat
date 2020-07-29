import React from 'react';
import Message from '../Message';
import Actions from '../Actions';

import { Container, Content } from './styles';

function Chat() {
  return <Container>
      <Content>
        <Message message={'Palmeiras não tem mundial! Palmeiras não tem mundial! Palmeiras não tem mundial! Palmeiras não tem mundial! Palmeiras não tem mundial!'}/>
        <Message send message={'Oloco meu! Olha essa fera!'}/>
      </Content>
      <Actions />
    </Container>;
}

export default Chat;