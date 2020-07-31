import React, { useRef, useEffect } from 'react';

import { Container, Form, Input, Button } from './styles';

function Actions({ onSubmit }) {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = inputEl.current.value;

    if (message) {
      inputEl.current.value = '';
      onSubmit(message);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input ref={inputEl} placeholder="Type your message here..." />
        <Button>Send</Button>
      </Form>
    </Container>
  );
}

export default Actions;
