import React from 'react';

const Todo = (props) => {
  const {
    todos,
    createTodo,
    handleChange,
  } = props;

  return (
    <div>
      <div>
        {todos.map((todo, idx) => {
          return (
            <div key={idx}>{todo.title}</div>
          );
        })}
      </div>
      <form>
        <input onChange={handleChange} type="text" id="title" />
        <button onClick={createTodo}>Create Todo</button>
      </form>
    </div>
  );
};

Todo.propTypes = {};

export default Todo;
