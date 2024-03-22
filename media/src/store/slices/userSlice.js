import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import {addUser} from "../index";
import {deleteUser} from "../index";


const userSlice = createSlice({
  name: "users",
  initialState:{
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers(builder){
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    })
    builder.addCase(addUser.pending, (state, action) =>{
      state.isLoading = true;
    })
    builder.addCase(addUser.fulfilled, (state, action) =>{
      state.isLoading = false
      state.data.push(action.payload);
    })
    builder.addCase(addUser.rejected, (state, action) =>{
      state.isLoading = false;
      state.error = action.error;
    })
    builder.addCase(deleteUser.pending, (state, action) =>{
      state.isLoading = true;
    })
    builder.addCase(deleteUser.fulfilled, (state, action) =>{
      state.isLoading = false
      state.data = state.data.filter(data => data.id !== action.payload);
    })
    builder.addCase(deleteUser.rejected, (state, action) =>{
      state.isLoading = false;
      state.error = action.error;
    })
  }
})

export const usersReducer = userSlice.reducer;