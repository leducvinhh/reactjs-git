import React, { useState } from 'react';
import TodoList from './components/TodoList';

const TodoFeature = () => {

   const defaultTodoList = [
      {
         id: 1,
         title: 'Playing football',
         status: 'new',
      },
      {
         id: 2,
         title: 'Playing game',
         status: 'completed',
      },
      {
         id: 3,
         title: 'Playing outdoor',
         status: 'new',
      },
      {
         id: 4,
         title: 'Playing indoor',
         status: 'new',
      },
   ];

   const [todoList, setTodoList] = useState(defaultTodoList);
   const [filter, setFilter] = useState('all');

   const handleComplete = (id) => {
      setTodoList(
         todoList.map((todo) =>
            todo.id === id ? { ...todo, status: todo.status === 'new' ? 'completed' : 'new' } : todo
         )
      );
   };

   const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
   };

   const todoFilter = todoList.filter((todo) => filter === 'all' || filter === todo.status);

   return (
      <div>
         <TodoList onFilter={handleFilterChange} onCompleted={handleComplete} todoList={todoFilter} />
      </div>
   );
};

export default TodoFeature;
