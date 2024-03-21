import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./slices/carSlice";
import { formReducer } from "./slices/formSlice";

import {changeSearchTerm, addCar, deleteCar} from "./slices/carSlice"
import {changeName, changeCost} from "./slices/formSlice"

const store = configureStore({
  reducer:{
    cars:carReducer,
    form:formReducer
  }
})

export {
  store,
  changeSearchTerm,
  addCar,
  deleteCar,
  changeName,
  changeCost,
}

