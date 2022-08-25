import { ReactComponent as LogoIcon } from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoIcon />
    </Container>
  );
};

export default Header;
