import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {
   todoList: PropTypes.array,
};

TodoList.defaultProps = {
   todoList: [],
};

function TodoList({ todoList, onCompleted, onFilter }) {
   return (
      <>
         <ul className="todo-list">
            {todoList.map((todo) => (
               <li
                  className={`todo-item ${todo.status === 'completed' && 'completed'}`}
                  key={todo.id}
                  onClick={() => onCompleted(todo.id)}
               >
                  {todo.title}
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
