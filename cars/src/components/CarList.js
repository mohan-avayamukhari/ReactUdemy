import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store"

const CarList = () => {
  const {cars, name} = useSelector(({form, cars:{data, searchTerm}}) => {
    const filteredCars = data.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return{cars: filteredCars, name:form.name}
  })
  const dispatch = useDispatch()
  const handleCarDelete = (id) => {
    dispatch(deleteCar(id));
  }
  const renderedCars = cars.map(car => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return(
      <div key={car.id} className={`panel ${bold && "bold"}`}>
      <p>{car.name} -${car.cost} </p>
      <button className="button is-danger" onClick={() => handleCarDelete(car.id)}>Delete</button>
    </div>
    )
  })
  return(
    <div className="car-list">
      {renderedCars}
      <hr/>
    </div>
  )
}
export default CarList
