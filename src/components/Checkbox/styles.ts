import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
  padding: 3px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

interface StyledCheckboxProps {
  $checked: boolean;
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;
  width: 18px;
  height: 18px;
  background: ${({ $checked, theme }) => ($checked ? theme['purple-dark'] : 'transparent')};
  border: 1px solid ${({ $checked, theme }) => ($checked ? theme['purple-dark'] : theme.blue)};
  border-radius: 50%;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    border-color: ${({ theme }) => theme['purple-dark']};
  }

  ${Icon} {
    visibility: ${({ $checked }) => ($checked ? 'visible' : 'hidden')};
  }
`;
