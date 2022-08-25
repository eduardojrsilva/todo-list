import { PlusCircle } from 'phosphor-react';
import { FormContainer } from './styles';

const SearchForm: React.FC = () => {
  return (
    <FormContainer>
      <input type="text" placeholder="Adicione uma nova tarefa" />

      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </FormContainer>
  );
};

export default SearchForm;
