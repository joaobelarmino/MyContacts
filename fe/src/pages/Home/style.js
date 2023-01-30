import styled from 'styled-components';

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 25px;
    padding: 0 16px;
    outline: none;
    font-size: 16px;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray.normal};
    }
  }
`;

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray.darker};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
  }
`;

export const ListContainer = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 2px solid ${({ theme }) => theme.colors.gray.normal};
  border-radius: 2px;

  header {
    margin-bottom: 8px;

    .sort-button {
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      outline: none;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
        margin-right: 8px;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;

  & + & {
    margin-top: 16px;
  }

  .contact {
    &__heading {
      display: flex;
      align-items: center;

      strong {
        font-size: 16px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.gray.darker};
        margin-right: 8px;
      }
      small {
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary.main};
        background-color: ${({ theme }) => theme.colors.primary.lighter};
        padding: 4px 8px;
        border-radius: 4px
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      margin-top: 4px;
      color: ${({ theme }) => theme.colors.gray.normal}
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: transparent;
      border: none;
      outline: none;
      position: relative;
      top: -1px;
    }
  }
`;
