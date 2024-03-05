import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider ({children}) {
  const [books, setBooks] = useState([]);

  const getAllBooks = useCallback(async () => {
    await axios.get("http://localhost:3001/books").then(response => {
      setBooks(response.data);
    })
  },[]);

  const createBook = async (title) => {
    await axios.post("http://localhost:3001/books", {title}).then(getAllBooks);
  }
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`).then(getAllBooks);
  }
  const editBookById = async (id, newTitle) => {
    await axios.put(`http://localhost:3001/books/${id}`, {title:newTitle}).then(getAllBooks);
  }

  const contextValue = {
    books,
    getAllBooks,
    createBook,
    deleteBookById,
    editBookById,
  }

  return(
    <BooksContext.Provider value={contextValue}>
      {children}
    </BooksContext.Provider>
  )
}

export {Provider}
export default BooksContext;