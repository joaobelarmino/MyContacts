import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

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
