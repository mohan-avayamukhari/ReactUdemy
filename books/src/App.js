import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import axios from "axios";

function App() {
  const [books, setBooks] = useState([])
  
  useEffect(() => {
    getAllBooks();
  }, [])

  const getAllBooks = async () => {
    await axios.get("http://localhost:3001/books").then(response => {
      setBooks(response.data);
    })
  }

  const createBook = async (title) => {
    await axios.post("http://localhost:3001/books", {title}).then(getAllBooks)
  }
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`).then(getAllBooks)
  }
  const editBookById = async (id, newTitle) => {
   // const updatedBooks = books.map(book => {
   //   if(book.id ===  id){
   //     return {...book, title:newTitle};
   //   }else{
   //     return book;
   //   }
   // })
    await axios.put(`http://localhost:3001/books/${id}`, {title:newTitle}).then(getAllBooks)
  }
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} deleteBook={deleteBookById} editBook={editBookById}/>
      <BookCreate createBook={createBook}/>
    </div>
  );
}

export default App;
