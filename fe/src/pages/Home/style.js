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
  justify-content: ${({ hasError }) => (hasError ? 'flex-end' : 'space-between')};
  align-items: center;
  margin-top: 32px;
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 2px solid rgba(188, 188, 188, 0.2);

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
    transition: background 0.1s ease-in;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ListHeader = styled.div`
  border-radius: 2px;

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

    img {
      transform: ${({ orderList }) => (orderList === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
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
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  gap: 24px;

  .error-details {
    strong {
      color: ${({ theme }) => theme.colors.danger.main};
      font-family: 'Sora', sans-serif;
      font-size: 22px;
      line-height: 110%;
      display: block;
    }

    button {
      margin-top: 8px;
    }

  }
`;
