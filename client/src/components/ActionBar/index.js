import React, { useRef, useEffect, useState } from 'react';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

import {
  Container,
  Form,
  InputContainer,
  InputContent,
  Input,
  Icon,
  Button,
  ContainerEmoji,
} from './styles';

import { ReactComponent as SmileIcon } from '../../assets/icons/smile.svg';

function Actions({ onSubmit }) {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [openEmojiList, setOpenEmojiList] = useState(null);

  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    inputEl.current.value += emojiObject.emoji;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = inputEl.current.value;

    if (message) {
      inputEl.current.value = '';
      setOpenEmojiList(false);
      onSubmit(message);
    }
  };

  const handleClickIcon = () => {
    setOpenEmojiList(!openEmojiList);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <InputContent>
            {openEmojiList && (
              <ContainerEmoji>
                <div>
                  <Picker
                    onEmojiClick={onEmojiClick}
                    skinTone={SKIN_TONE_MEDIUM_DARK}
                  />
                </div>
              </ContainerEmoji>
            )}
            <Input ref={inputEl} placeholder="Type your message here..." />
          </InputContent>
          <Icon>
            <SmileIcon onClick={handleClickIcon} />
          </Icon>
        </InputContainer>
        <Button>Send</Button>
      </Form>
    </Container>
  );
}

export default Actions;
