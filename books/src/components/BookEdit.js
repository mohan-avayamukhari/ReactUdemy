import { useState } from "react";

const BookEdit = ({book, handleEdit}) => {
  const [newTitle, setNewTitle] = useState(book.title);

  return(
    <div>
      <form className="book-edit" onSubmit={(event) => handleEdit(event, book.id, newTitle)}>
        <label>Title</label>
        <input className="input" onChange={(event) => setNewTitle(event.target.value)}value={newTitle}/>
        <button className="button is-primary" typeof="submit">Save</button>
      </form>
    </div>
  )
}
export default BookEdit;