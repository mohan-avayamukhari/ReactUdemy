import { useState } from "react";

const BookCreate = ({createBook}) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("")
  }
  return(
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={(event) => setTitle(event.target.value)}/>
        <button className="button" typeof="submit">Create!</button>
      </form>
    </div>
  )
}
export default BookCreate;