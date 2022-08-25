import styled from 'styled-components';
import { convertPixelToRem, flex } from 'css-blocks-styled-components';

export const Container = styled.header`
  ${flex.middle}
  background: ${({ theme }) => theme['gray-700']};
  height: ${convertPixelToRem(200)};
`;
