import React, { useContext } from 'react';
import TodoContext from '../context/TodoContext';

// class TodoList extends React.Component {
//   render() {
//     const { todos } = this.props;
//     return (
//       <ul>
//         { todos.map(todo => <li>{ todo }</li>) }
//       </ul>
//     );
//   }
// }

function TodoList() { // refatorando classes com função
  const { todos } = useContext(TodoContext);

  return (
    <ul>
      { todos.map((todo, index) => <li key={index}>{ todo }</li>) }
    </ul>
  );
}

export default TodoList;
