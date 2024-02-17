/* eslint-disable react/prop-types */
import { useState } from 'react';

const TodoForm = ({ handlesetTodoList }) => {
  const [todo, setTodo] = useState('');

  function handleSetTodo(e) {
    setTodo(e.target.value);
  }

  function handleAddTodoList() {
    handlesetTodoList(todo);
  }
  return (
    <div>
      <input
        type='text'
        name=''
        id=''
        onChange={(e) => handleSetTodo(e)}
      />
      <button onClick={handleAddTodoList}>Add</button>
    </div>
  );
};
export default TodoForm;
