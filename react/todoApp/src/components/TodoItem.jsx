/* eslint-disable react/prop-types */
const TodoItem = ({ todo, handleCheckbox, handleDelTodo }) => {
  function handleCheckboxClick() {
    handleCheckbox(todo.todo);
  }

  function handleDelClik() {
    handleDelTodo(todo.todo);
  }

  return (
    <div className='todo-container'>
      <input
        type='checkbox'
        name=''
        className='todo-checkbox'
        checked={!todo.status}
        onClick={handleCheckboxClick}
      />
      <h5 className='todo'>{todo.todo}</h5>

      <button
        id='remove-todo'
        onClick={handleDelClik}
      >
        x
      </button>
    </div>
  );
};

export default TodoItem;
