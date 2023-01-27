import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 74px;
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background-color: #fff;
    border: none;
    border-radius: 25px;
    padding: 0 16px;
    outline: none;
    font-size: 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
