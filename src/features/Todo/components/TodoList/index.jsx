import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {
   todoList: PropTypes.array,
};

TodoList.defaultProps = {
   todoList: [],
};

function TodoList({ todoList }) {
   return (
      <ul className="todo-list">
         {todoList.map((todo) => (
            <li className = "todo-item" key={todo.id}> {todo.title}</li>
         ))}
      </ul>
   );
}

export default TodoList;
