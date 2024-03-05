import { useState } from "react";
import BookEdit from "./BookEdit"
import useBooksContext from "./hooks/useBooksContext";

const BookShow = ({book}) => {
  const [edit, setEdit] = useState(false)
  const {editBookById, deleteBookById} = useBooksContext();

  const handleEdit = (event, id, newTitle) => {
    event.preventDefault();
    editBookById(id, newTitle);
    setEdit(false);
  }

  return(
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book"/>
      {edit? <BookEdit book={book} handleEdit={handleEdit}/>:<div>{book.title}</div>}
      <div className="actions">
        <button className="delete" onClick={() => deleteBookById(book.id)}>delete</button>
        <button className="edit" onClick={() => setEdit(true)}>edit</button>
      </div>
    </div>
  )
}
export default BookShow;