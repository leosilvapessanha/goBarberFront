import styled from 'styled-components'

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  svg{
    margin-right: 16px;
  }

  & + div{
    margin-top: 8px;
  }

  input{
    flex: 1;
    color: #f4ede8;
    background: transparent;
    border: 0;

      &::placeholder{
        color: #666360;
      }

      & + input{
        margin-top: 8px;
      }

    }
`