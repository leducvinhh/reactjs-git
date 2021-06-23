import React, { useEffect, useState } from 'react';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

const TodoFeature = () => {
   const [todoList, setTodoList] = useState([]);
   const [filter, setFilter] = useState('all');

   useEffect(() => {
      const bookServer = async () => {
         const listBook = await fetchBooks();

         setTodoList(listBook);
      };

      bookServer();
   }, []);

   //Fetch Books
   const fetchBooks = async () => {
      const res = await fetch('http://localhost:5000/book');
      const data = await res.json();

      return data;
   };

   const fetchBook = async (id) => {
      const res = await fetch(`http://localhost:5000/book/${id}`);
      const data = await res.json();

      return data;
   };

   //Add Book
   const addBook = async (book) => {
      const res = await fetch('http://localhost:5000/book', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(book),
      });

      const data = await res.json();
      setTodoList([...todoList, data]);
   };

   //Delete Book
   const deleteBook = async (id) => {
      const res = await fetch(`http://localhost:5000/book/${id}`, {
         method: 'DELETE',
      });

      res.status === 200 && setTodoList(todoList.filter((todo) => todo.id !== id));
   };

   const updateBook = async (id) => {
      const bookServer = await fetchBook(id);

      const upBook = { ...bookServer, status: bookServer.status === 'completed' ? 'new' : 'completed' };
      const res = await fetch(`http://localhost:5000/book/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(upBook),
      });

      const data = await res.json();

      setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, status: data.status } : todo)));
   };

   const handleFilterChange = (newFilter) => {
      setFilter(newFilter);
   };

   const todoFilter = todoList.filter((todo) => filter === 'all' || filter === todo.status);

   return (
      <div>
         <AddForm onAddBook={addBook} />
         <TodoList onDelete={deleteBook} onFilter={handleFilterChange} onCompleted={updateBook} todoList={todoFilter} />
      </div>
   );
};

export default TodoFeature;
