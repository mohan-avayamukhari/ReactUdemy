import { useEffect } from "react";
import BookCreate from "./components/BookCreate"
import BookList from "./components/BookList"
import useBooksContext from "./components/hooks/useBooksContext";

function App() {
  const {getAllBooks} = useBooksContext();
  
  useEffect(() => {
    getAllBooks();
  }, [getAllBooks])

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList/>
      <BookCreate/>
    </div>
  );
}

export default App;
