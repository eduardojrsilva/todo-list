import { ChangeEvent, FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuid } from 'uuid';

import { Task } from '../../types/task';

import { FormContainer } from './styles';

interface SearchFormProps {
  addTask: (task: Task) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ addTask }) => {
  const [description, setDescription] = useState('');

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>): void => {
    setDescription(event.target.value);
  };

  const handleAddTask = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!description) return;

    const task = {
      id: uuid(),
      description,
      done: false,
    };

    setDescription('');
    addTask(task);
  };

  return (
    <FormContainer onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={description}
        onChange={handleChangeDescription}
      />

      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </FormContainer>
  );
};

export default SearchForm;
