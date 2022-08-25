import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import { Container, TasksCategory, TasksCategoryContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <SearchForm />

        <TasksCategoryContainer>
          <TasksCategory type="button" $variant="created" $amount={5}>
            Tarefas criadas
          </TasksCategory>
          <TasksCategory type="button" $variant="done" $amount="3 de 5">
            Concluídas
          </TasksCategory>
        </TasksCategoryContainer>
      </Container>
    </>
  );
};

export default Dashboard;
