/* eslint-disable react/jsx-key */
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
// Main parent component
const TodoList = () => {
  // state for managing todos
  const [todoList, setTodoList] = useState([{ todo: 'read', status: true }]);
  // state for managing the add button
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    // event handler for the add button
    setClicked(!clicked);
  }

  function handlesetTodoList(todo) {
    // event handler for creating new todos form a form
    setTodoList(() => {
      return [...todoList, { todo: todo, status: true }];
    });
  }

  function handleCheckbox(todo) {
    // event handler for checking and unchecking the checkbox
    todoList.forEach((tododict) => {
      if (todo == tododict.todo) {
        tododict.status = !tododict.status;
      }
      setTodoList([...todoList]);
    });
  }

  function handleDelTodo(todo) {
    // event handler for del todos
    const newList = todoList.filter((tododict) => tododict.todo != todo);

    setTodoList(newList);
  }
  return (
    <>
      <div className='card'>
        <div className='todo-card'>
          <h3 className='Header'>To-dos</h3>
          {todoList.length ? (
            <>
              {todoList.map((todo) => {
                // renders todos if uncompleted
                if (todo.status == true) {
                  return (
                    <TodoItem
                      todo={todo}
                      handleCheckbox={handleCheckbox}
                      handleDelTodo={handleDelTodo}
                    />
                  );
                }
              })}
            </>
          ) : (
            <h5>No Todos</h5>
          )}
        </div>
        <div className='completed-card'>
          <h3>Completed</h3>
          {
            <>
              {todoList.map((todo) => {
                // renders todos if completed
                if (todo.status == false) {
                  return (
                    <TodoItem
                      todo={todo}
                      handleCheckbox={handleCheckbox}
                      handleDelTodo={handleDelTodo}
                    />
                  );
                }
              })}
            </>
          }
        </div>
        {clicked ? (
          <TodoForm handlesetTodoList={handlesetTodoList} />
        ) : (
          <button onClick={handleClick}>+</button>
        )}
      </div>
    </>
  );
};

export default TodoList;
