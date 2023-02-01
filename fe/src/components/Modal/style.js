import styled, { keyframes } from 'styled-components';

const applyBackdropFilter = keyframes`
    0% {
      backdrop-filter: blur(0px);
    }
    100% {
      backdrop-filter: blur(3px);
    }
`;

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  animation: ${applyBackdropFilter} 0.3s ease-out;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (
    danger ? theme.colors.danger.main : theme.colors.gray.darker
  )}
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 32px;

  button {
    height: 40px;
  }

  .cancel-button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray.normal};
  }
`;
