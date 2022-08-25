import { convertPixelToRem } from 'css-blocks-styled-components';
import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  gap: ${convertPixelToRem(8)};

  input {
    flex: 1;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid transparent;
    color: ${({ theme }) => theme['gray-100']};
    background: ${({ theme }) => theme['gray-500']};
    outline: 0;

    ::placeholder {
      color: ${({ theme }) => theme['gray-300']};
    }

    :focus {
      border-color: ${({ theme }) => theme['purple-dark']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: ${convertPixelToRem(8)};

    padding: 1rem;
    border: 0;
    border-radius: 8px;
    background: ${({ theme }) => theme['blue-dark']};

    font-size: ${convertPixelToRem(14)};
    font-weight: 700;
    color: ${({ theme }) => theme['gray-100']};

    :hover {
      transition: background-color 0.3s;
      background: ${({ theme }) => theme.blue};
    }
  }
`;
