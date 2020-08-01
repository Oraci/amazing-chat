import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: ${({ theme }) => theme.actionBar.backgroundColor};
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Input = styled.input`
  height: 40px;
  max-width: 400px;
  width: 400px;
  margin-right: 8px;
  padding: 0 35px 0 5px;
`;

export const Button = styled.button`
  height: 45px;
  width: 70px;
  background-color: ${({ theme }) =>
    theme.actionBar.sendButton.backgroundColor};
  color: ${({ theme }) => theme.actionBar.sendButton.color};
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 15px;
  cursor: pointer;
`;

export const ContainerEmoji = styled.div`
  position: absolute;
  bottom: 50px;
`;
