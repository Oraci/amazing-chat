import styled from 'styled-components';

export const WrapperPage = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 640px;
  width: 640px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const WrapperChat = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  align-items: center;
  overflow: auto;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  height: 40px;
  max-width: 400px;
  width: 400px;
  margin-right: 8px;
  padding: 0 5px 0;
`;

export const Button = styled.button`
  height: 40px;
  width: 70px;
  background-color: #ff876d;
  color: white;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Text = styled.p`
  text-align: center;
  color: #bdbdbd;
  font-weight: bold;
`;

export const Img = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;
