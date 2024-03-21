import { useDispatch, useSelector } from "react-redux"
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const searchTerm = useSelector(state => state.cars.searchTerm);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  }
  return(
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horizontal">
        <label htmlFor="search">Search</label>
        <input id="search" className="input" value={searchTerm} onChange={(event) => handleInputChange(event)}/>
      </div>
    </div>
  )
}
export default CarSearch
