import BookShow from "./BookShow"
const BookList = ({books, deleteBook, editBook}) => {
  return(
    <div className="book-list">
      {books.map(book => <BookShow key={book.id} book={book} deleteBook={deleteBook} editBook={editBook}/>)}
    </div>
  )
}
export default BookList;