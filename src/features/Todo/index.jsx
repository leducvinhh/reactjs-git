import React from 'react';
import TodoList from './components/TodoList';

const TodoFeature = () => {
   const todoList = [
      {
         id: 1,
         title: 'Playing football',
      },
      {
         id: 2,
         title: 'Playing game',
      },
      {
         id: 3,
         title: 'Playing outdoor',
      },
      {
         id: 4,
         title: 'Playing indoor',
      },
   ];
   return (
      <div>
         <TodoList todoList={todoList} />
      </div>
   );
};

export default TodoFeature;




















