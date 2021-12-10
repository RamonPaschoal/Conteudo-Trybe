import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoInput() {
  // const [ newTodo, setNewTodo ] = useState(''); ===> essa linha foi transferida para o Provider, que guarda as informações de estado. Não é necessário em todas as ocasiões, e nessa também não era necessário
  const { addTodo, newTodo, setNewTodo } = useContext(TodoContext);

  const handleChange = ({ target }) => {
    setNewTodo(target.value);
  }

  const handleClick = () => {
    addTodo(newTodo);
    setNewTodo('');
  }

  return(
    <section>
      <label htmlFor="addTodo">
        Insira uma Tarefa:
        <input
          value={ newTodo }
          onChange={ handleChange }
          type="text"
          name="newTodo"
          id="newTodo"
        />
      </label>
      <button onClick={ handleClick }>Adicionar Tarefa</button>
    </section>
  )
}

export default TodoInput;
