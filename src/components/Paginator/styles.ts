import styled from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

export const PaginatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 3rem;
  gap: 1rem;

  > strong {
    color: ${({ theme }) => theme.blue};
    font-size: ${convertPixelToRem(14)};
  }
  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    > div {
      display: flex;
    }

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }
  @media (max-width: 750px) {
    flex-direction: column;
    margin: 0 1rem;
  }
`;

export const Button = styled.button`
  border-radius: 50%;
  background: transparent;
  color: ${({ theme }) => theme.purple};
  width: 30px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.purple};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.blue};
    color: ${({ theme }) => theme.blue};
  }

  &:disabled {
    background: ${({ theme }) => theme['purple-dark']};
    border-color: ${({ theme }) => theme['purple-dark']};
    color: ${({ theme }) => theme.white};
  }

  @media (max-width: 400px) {
    width: 25px;
    height: 25px;
  }
`;

export const HiddenPages = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
`;
