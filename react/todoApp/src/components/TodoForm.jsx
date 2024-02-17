/* eslint-disable react/prop-types */
import { useState } from 'react';

//form components
const TodoForm = ({ handlesetTodoList }) => {
  // state for new todos
  const [todo, setTodo] = useState('');

  function handleSetTodo(e) {
    // event hander for setting new to do
    setTodo(e.target.value);
  }

  function handleAddTodoList() {
    // event handler that calls another event handler from parent to update the todoList state
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
