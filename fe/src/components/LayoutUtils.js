import styled, { css } from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 0 16px;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  transition: border-color 0.3s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.normal};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }

  ${({ theme, error }) => error && css`
    border-color: ${theme.colors.danger.main} !important;
    color: ${theme.colors.danger.main};
  `}
`;

export const Select = styled.select`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: 0 16px;
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  transition: border-color 0.3s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray.normal};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  transition: background 0.1s ease-in;

  span {
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray.medium};
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover{
      background-color: ${theme.colors.danger.light};
    }

    &:active {
      background-color: ${theme.colors.danger.darker};
    }
  `};
`;
