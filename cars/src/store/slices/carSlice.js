import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: "cars",
  initialState: {searchTerm: "", data: []},
  reducers:{
    changeSearchTerm(state, action){
      state.searchTerm = action.payload;
    },
    addCar(state, action){
      state.data.push({
        id:nanoid(),
        name:action.payload.name,
        cost:action.payload.cost
      });
    },
    deleteCar(state, action){
      const newData = state.data.filter(car => car.id !== action.payload);
      state.data = newData;
    }
  },
})

export const {changeSearchTerm, addCar, deleteCar} = carSlice.actions;
export const carReducer = carSlice.reducer;