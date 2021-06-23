import React, { useState } from 'react';

const AddForm = ({ onAddBook }) => {
   const [bookName, setBookName] = useState('');
   const [price, setPrice] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      onAddBook({
         title: bookName,
         price: price,
         status: 'new',
      });

      setBookName('');
      setPrice('');
   };
   return (
      <form onSubmit={handleSubmit}>
         <div className="form-group">
            <label>Book name</label>
            <input type="text" value={bookName} onChange={(e) => setBookName(e.target.value)} />
         </div>
         <div className="form-group">
            <label>price</label>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
         </div>
         <input type="submit" value="Save Book" />
      </form>
   );
};

export default AddForm;
