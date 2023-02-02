import styled from 'styled-components';

export const Form = styled.form`
`;

export const ButtonContainer = styled.div`
  margin-top: 24px;

  .info-to-submit {
    display: flex;
    align-items: center;
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.gray.medium};
    font-size: 12px;
    img {
      margin-right: 8px;
    }
  }

  button {
    width: 100%;
  }
`;
