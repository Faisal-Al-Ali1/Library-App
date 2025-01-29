import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://pristine-clean-68669-default-rtdb.firebaseio.com/books";

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", isbn: "" });

  // Fetch books from Firebase
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${API_URL}.json`);
        if (response.data) {
          const booksArray = Object.entries(response.data).map(([id, book]) => ({ id, ...book }));
          setBooks(booksArray);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Add a new book
  const addBook = async () => {
    if (!newBook.title || !newBook.author || !newBook.isbn) return;
    try {
      const response = await axios.post(`${API_URL}.json`, newBook);
      setBooks([...books, { id: response.data.name, ...newBook }]);
      setNewBook({ title: "", author: "", isbn: "" });
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  // Update a book with a prompt
  const updateBook = async (id, currentTitle) => {
    const newTitle = prompt("Enter the new title:", currentTitle);
    if (!newTitle) return;
    try {
      await axios.patch(`${API_URL}/${id}.json`, { title: newTitle });
      setBooks(books.map(book => (book.id === id ? { ...book, title: newTitle } : book)));
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  // Soft delete a book (mark as deleted instead of removing)
  const softDeleteBook = async (id) => {
    try {
      await axios.patch(`${API_URL}/${id}.json`, { deleted: true });
      setBooks(books.map(book => (book.id === id ? { ...book, deleted: true } : book)));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div>
      <h2>Book Catalog</h2>
      <div className="catalog-container">
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="ISBN"
          value={newBook.isbn}
          onChange={(e) => setNewBook({ ...newBook, isbn: e.target.value })}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <div className="book-grid">
        {books.filter(book => !book.deleted).map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>ISBN: {book.isbn}</p>
            <button onClick={() => updateBook(book.id, book.title)}>Update</button>
            <button onClick={() => softDeleteBook(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;
