import styled, {css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.send ? 'flex-end' : 'flex-start'};
  
  ${props => props.send ? css`{
    justify-content: flex-end;
    
    ${Content} {    
      background-color: #fcf6c5;
    }

    ${Text} {
      text-align: right;
    }
  }
  ` : css`{
    justify-content: flex-start;
  }`}
  
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  border: 1px solid #E0E0E0;
  justify-content: center;
  margin: 8px 24px 8px 24px;
  background-color: white;
  border-radius: 4px;
  padding: 16px;
`

export const Text = styled.p`
  font-style: bold;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.01em;
  color: #BDBDBD;
`

export const Msg = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.01em;
  margin: 4px 0 4px 00;
`