import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteUser = createAsyncThunk("user/delete", async(id) => {
  await axios.delete(`http://localhost:3001/users/${id}`)
  return id;
})

export {deleteUser};