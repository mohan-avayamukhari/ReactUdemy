import { useDispatch, useSelector } from "react-redux"
import { addCar, changeCost, changeName } from "../store";
import { createSelector } from "@reduxjs/toolkit";

const CarForm = () => {
  const dispatch = useDispatch();
  const memoriedForm = createSelector(
    (state) => state.form.name,
    (state) => state.form.cost,
    (name, cost) => {
      return { name, cost };
    }
  )

  const{name, cost} = useSelector(memoriedForm);
  const HandleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({name, cost}))
  }
  return(
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={HandleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="name" className="label">Name</label>
            <input required id="name" className="input is-expanded" value={name} onChange={(event) => dispatch(changeName(event.target.value))}/>
          </div>
          <div className="field">
            <label htmlFor="cost" className="label">Cost</label>
            <input required id="cost" className="input is-expanded" type="number" value={cost || ""} onChange={(event) => dispatch(changeCost(parseInt(event.target.value)|| 0 ))}/>
          </div>
        </div>
        <button className="button is-link">Submit</button>
      </form>
    </div>
  )
}
export default CarForm
