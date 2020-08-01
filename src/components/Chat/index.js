import React, { useRef, useEffect, useState } from 'react';
import useSocket from 'use-socket.io-client';
import { useImmer } from 'use-immer';
import { format } from 'date-fns';
import MessageBox from '../MessageBox';
import ActionBar from '../ActionBar';

import {
  WrapperPage,
  WrapperChat,
  Container,
  Content,
  Form,
  Input,
  Button,
  Text,
} from './styles';

function Chat() {
  const [containerEl, setContainerEl] = useState(useRef(null));
  const [username, setUsername] = useState('');
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useImmer([]);

  const inputEl = useRef(null);

  const [socket] = useSocket('http://localhost:3001/');
  socket.connect();

  const scrollToBottom = () => {
    if (containerEl.current) {
      setTimeout(() => {
        containerEl.current.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }, 100);
    }
  };

  const addMessage = (nick, message) => {
    const timestamp = format(new Date(), 'dd MMM yyyy kk:mm');

    setMessages((draft) => {
      draft.push({ nick, message, timestamp });
    });

    scrollToBottom();
  };

  const addParticipantsMessage = (data) => {
    let message = '';
    if (data.numUsers === 1) {
      message += "There's 1 participant";
    } else {
      message += `There are ${data.numUsers} participants`;
    }

    addMessage('warning', message);
  };

  useEffect(() => {
    socket.on('login', (data) => {
      setConnected(true);
      // addMessage('warning', 'Welcome to chat');
      addParticipantsMessage(data);
    });

    socket.on('user joined', (data) => {
      addMessage('warning', `${data.username} joined`);
      addParticipantsMessage(data);
    });

    socket.on('user left', (data) => {
      addMessage('warning', `${data.username} left`);
      addParticipantsMessage(data);
    });

    socket.on('new message', (data) => {
      addMessage(data.username, data.message);
    });

    inputEl.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nickname = inputEl.current.value;
    if (nickname) {
      setUsername(nickname);
      addMessage('warning', `Welcome to chat ${nickname}`);
      socket.emit('add user', nickname);
    }
  };

  const handleSendMessage = (message) => {
    addMessage(username, message);
    socket.emit('new message', message);
  };

  return (
    <WrapperPage>
      <WrapperChat>
        <Container>
          {!username ? (
            <Form onSubmit={handleSubmit}>
              <Input id="name" placeholder="What is your name?" ref={inputEl} />
              <Button>Enter</Button>
            </Form>
          ) : (
            <>
              {messages.length > 0 && (
                <Content ref={containerEl}>
                  {messages.map((msg, index) =>
                    msg.nick === 'warning' ? (
                      <Text key={index}>{msg.message}</Text>
                    ) : (
                      <MessageBox
                        key={index}
                        username={msg.nick}
                        message={msg.message}
                        timestamp={msg.timestamp}
                        isMine={msg.nick === username}
                      />
                    )
                  )}
                </Content>
              )}
            </>
          )}
        </Container>
      </WrapperChat>
      {username && <ActionBar onSubmit={handleSendMessage} />}
    </WrapperPage>
  );
}

export default Chat;
