/* eslint-disable react/prop-types */

const TodoItem = ({ todo, handleCheckbox, handleDelTodo }) => {
  //componet for indiviual Item

  function handleCheckboxClick() {
    //event handler that calls an event handler from parent to handle checked todos
    handleCheckbox(todo.todo);
  }

  function handleDelClik() {
    //event handler that calls an event handler from parent to handle deleting todos
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
