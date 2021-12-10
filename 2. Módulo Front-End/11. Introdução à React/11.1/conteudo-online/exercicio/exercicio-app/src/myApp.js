  import React from 'react';
  import './App.css';

  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }

const array = ['Limpar casa', 'estudar', 'comer'];

class AppArray extends React.Component {
  render() {
    return <ul>{ array.map(task1 => Task(task1)) }</ul>;
  }
}

export default AppArray;