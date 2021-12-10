import React, { useState } from 'react';
import TodoContext from './TodoContext';

function TodoProvider({ children }) {
  const [ todos, setTodos ] = useState([]);
  const [ newTodo, setNewTodo ] = useState(''); 
  
  const addTodo = (newTodo) => {
    setTodos(todos.concat(newTodo));
  }

  return (
    <main>
      <TodoContext.Provider value={{ todos, addTodo, newTodo, setNewTodo }}>
        { children } 
      </TodoContext.Provider> 
    </main> // Na linha 14 informo que qualquer elemento filho de TodoContext.Provider terá acesso há todos e addTodo.
  )
}

export default TodoProvider;