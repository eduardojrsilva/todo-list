import { ChangeEventHandler } from 'react';
import { CheckboxContainer, HiddenCheckbox, Icon, StyledCheckbox } from './styles';

interface CheckBoxProps {
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const CheckBox: React.FC<CheckBoxProps> = ({ checked, onChange }) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} onChange={onChange} />
      <StyledCheckbox $checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default CheckBox;
