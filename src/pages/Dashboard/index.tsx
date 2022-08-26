import { useState } from 'react';
import { Trash } from 'phosphor-react';
import { ReactComponent as ClipboardIcon } from '../../assets/clipboard.svg';

import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';

import { Task } from '../../types/task';

import {
  Container,
  EmptyTasks,
  TaskCard,
  TaskDescription,
  TasksCategory,
  TasksCategoryContainer,
  TasksList,
} from './styles';

const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const tasksDone = tasks.reduce((acc, task) => (task.done ? acc + 1 : acc), 0);

  const handleAddNewTask = (task: Task): void => {
    setTasks((state) => [...state, task]);
  };

  const handleRemoveTask = (id: string): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleCheckboxChange = (id: string): void => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            done: !task.done,
          };
        }

        return task;
      }),
    );
  };

  return (
    <>
      <Header />

      <Container>
        <SearchForm addTask={handleAddNewTask} />

        <TasksCategoryContainer>
          <TasksCategory type="button" $variant="created" $amount={tasks.length}>
            Tarefas criadas
          </TasksCategory>

          <TasksCategory
            type="button"
            $variant="done"
            $amount={tasks.length ? `${tasksDone} de ${tasks.length}` : 0}
          >
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
              <TaskCard key={task.id}>
                <div>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => handleCheckboxChange(task.id)}
                  />

                  <TaskDescription $done={task.done}>{task.description}</TaskDescription>
                </div>

                <button type="button" onClick={() => handleRemoveTask(task.id)}>
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
