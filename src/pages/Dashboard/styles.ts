import styled from 'styled-components';
import { convertPixelToRem } from 'css-blocks-styled-components';

export const Container = styled.div`
  max-width: ${convertPixelToRem(750)};
  margin: -24px auto 0;
`;
