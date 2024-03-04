import { useState } from "react";
import BookEdit from "./BookEdit"

const BookShow = ({book, deleteBook, editBook}) => {
  const [edit, setEdit] = useState(false)

  const handleEdit = (event, id, newTitle) => {
    event.preventDefault();
    editBook(id, newTitle);
    setEdit(false);
  }

  return(
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book"/>
      {edit? <BookEdit book={book} handleEdit={handleEdit}/>:<div>{book.title}</div>}
      <div className="actions">
        <button className="delete" onClick={() => deleteBook(book.id)}>delete</button>
        <button className="edit" onClick={() => setEdit(true)}>edit</button>
      </div>
    </div>
  )
}
export default BookShow;