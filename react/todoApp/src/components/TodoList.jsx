/* eslint-disable react/jsx-key */
import { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todoList, setTodoList] = useState([{ todo: 'read', status: true }]);
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  function handlesetTodoList(todo) {
    setTodoList(() => {
      return [...todoList, { todo: todo, status: true }];
    });
  }

  function handleCheckbox(todo) {
    todoList.forEach((tododict) => {
      if (todo == tododict.todo) {
        tododict.status = !tododict.status;
      }
      setTodoList([...todoList]);
    });
  }
  function handleDelTodo(todo) {
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
