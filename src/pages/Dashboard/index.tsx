import { useState, ChangeEvent } from 'react';
import { Trash } from 'phosphor-react';
import { ReactComponent as ClipboardIcon } from '../../assets/clipboard.svg';

import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';

import {
  Container,
  EmptyTasks,
  TaskCard,
  TasksCategory,
  TasksCategoryContainer,
  TasksList,
} from './styles';
import CheckBox from '../../components/Checkbox';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
  ]);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setChecked(event.target.checked);
  };

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

        {tasks.length === 0 ? (
          <EmptyTasks>
            <ClipboardIcon />

            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie taredas e organize seus itens a fazer</span>
          </EmptyTasks>
        ) : (
          <TasksList>
            {tasks.map((task) => (
              <TaskCard>
                <div>
                  <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
                  <span>{task}</span>
                </div>

                <button type="button">
                  <Trash />
                </button>
              </TaskCard>
            ))}
          </TasksList>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
