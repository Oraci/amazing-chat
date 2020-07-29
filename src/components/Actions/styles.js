import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: #3798d4;
  align-items: center;
`;

export const Content = styled.div`
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
  padding: 0 5px 0;
`;

export const Button = styled.button`
  height: 45px;
  width: 70px;
  background-color: #ff876d;
  color: white;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
`;
