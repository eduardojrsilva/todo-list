import styled, { css } from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';

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

export const TasksCategory = styled.div<TasksCategoryProps>`
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

export const EmptyTasks = styled.div`
  ${flex.middle};
  flex-direction: column;

  margin-top: ${convertPixelToRem(24)};
  padding: ${convertPixelToRem(64)} ${convertPixelToRem(24)};
  border-top: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  color: ${({ theme }) => theme['gray-300']};

  > strong {
    margin-top: 1rem;
    margin-bottom: ${convertPixelToRem(4)};
  }
`;

export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${convertPixelToRem(12)};
  margin-top: ${convertPixelToRem(24)};
`;

export const TaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${convertPixelToRem(12)};

  padding: 1rem;
  border: 1px solid ${({ theme }) => theme['gray-400']};
  border-radius: 8px;
  background: ${({ theme }) => theme['gray-500']};

  > div {
    display: flex;
    gap: ${convertPixelToRem(12)};
  }

  > button {
    background: transparent;
    color: ${({ theme }) => theme['gray-300']};
    border: 0;

    :hover {
      transition: color 0.3s;
      color: ${({ theme }) => theme.danger};
    }
  }
`;

interface TaskDescriptionProps {
  $done: boolean;
}

export const TaskDescription = styled.span<TaskDescriptionProps>`
  font-size: ${convertPixelToRem(14)};

  line-height: 140%;

  ${({ $done, theme }) =>
    $done
      ? css`
          color: ${theme['gray-300']};
          text-decoration: line-through;
        `
      : css`
          color: ${theme['gray-100']};
        `}
`;
