import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8000/menuList";

export const getMenuItems = createAsyncThunk(
  "menu/getMenuItems",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  menuLists: [],
  cart: [],
  isLoading: false,
  error: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenuItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenuItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menuLists = action.payload;
        state.error = "";
      })
      .addCase(getMenuItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

console.log(menuSlice);

export default menuSlice.reducer;
