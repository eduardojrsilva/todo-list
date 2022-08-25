import styled, { css } from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

export const Container = styled.div`
  max-width: ${convertPixelToRem(750)};
  margin: -24px auto 0;
`;

export const TasksCategoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${convertPixelToRem(64)};
`;

interface TasksCategoryProps {
  $variant: 'created' | 'done';
  $amount: number | string;
}

export const TasksCategory = styled.button<TasksCategoryProps>`
  background: transparent;
  border: 0;
  font-weight: bold;
  font-size: ${convertPixelToRem(14)};

  ${({ $variant, $amount, theme }) => css`
    color: ${$variant === 'created' ? theme.blue : theme.purple};

    ::after {
      content: '${$amount}';
      border-radius: 999px;
      padding: 2px 8px;
      margin-left: 8px;
      background: ${theme['gray-400']};

      font-size: ${convertPixelToRem(12)};
      color: ${theme['gray-100']};
    }
  `}
`;
