import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  items: [],
  status: null,
};
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async () => {
//     try {
//       const response = await axios.get("http://localhost:8080/stickers");
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchProducts.pending, (state) => {
  //       state.status = "pending";
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.items = action.payload;
  //       state.status = "success";
  //     })
  //     .addCase(fetchProducts.rejected, (state) => {
  //       state.status = "rejected";
  //     });
  // },
});

export default productsSlice.reducer;
