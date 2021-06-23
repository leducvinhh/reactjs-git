import PropTypes from 'prop-types';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './style.scss';

TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList, onCompleted, onFilter, onDelete }) {
  return (
    <>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <li
            className={`todo-item ${todo.status === 'completed' && 'completed'}`}
            key={todo.id}
            onClick={() => onCompleted(todo.id)}
          >
            <h4>{todo.title}</h4>
            <p>Price: {todo.price}</p>
            <FaTimes
              style={{ color: 'red' }}
              onClick={function (e) {
                e.stopPropagation();

                if (onDelete) {
                  onDelete(todo.id);
                }
              }}
            />
          </li>
        ))}
      </ul>
      <div className="btn-list">
        <button onClick={() => onFilter('all')}>Show All</button>
        <button onClick={() => onFilter('new')}>Show New</button>
        <button onClick={() => onFilter('completed')}>Show Completed</button>
      </div>
    </>
  );
}

export default TodoList;
