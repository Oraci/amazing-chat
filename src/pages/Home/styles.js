import styled from 'styled-components';
import img from '../../assets/Body_BG.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
`;
