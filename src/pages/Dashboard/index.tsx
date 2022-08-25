import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <SearchForm />
      </Container>
    </>
  );
};

export default Dashboard;
