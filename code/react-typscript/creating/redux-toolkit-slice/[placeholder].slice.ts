import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type PlaceholderState = {
   loading: boolean;
   placeholder: any[];
   error: any;
};

const initialState: PlaceholderState = {
   loading: true,
   placeholder: [],
   error: null,
};

export const placeholderSlice = createSlice({
   name: "placeholder",
   initialState: initialState,
   reducers: {},
   extraReducers(builder) {
      const { _getusers } = new PlaceholderService();

      /*________________getAddress_________________*/
      builder.addCase(_getusers.pending, (state) => {
         state.loading = true;
      });

      builder.addCase(_getusers.fulfilled, (state, action: PayloadAction<any[]>) => {
         state.loading = false;
         state.placeholder = action.payload;
         state.error = null;
      });

      builder.addCase(_getusers.rejected, (state, action) => {
         state.loading = false;
         state.error = action.error.message || "something went wrong!";
      });
   },
});

export default placeholderSlice.reducer;

class PlaceholderService {
   constructor() {}
   _getusers = createAsyncThunk("/placeholder/test", async (_, thunkAPI) => {
      try {
         const { data } = await axios.get("https://dummyjson.com/users");
         alert(data.message);
         return data;
      } catch (error: any) {
         alert(error?.response?.data?.error?.message);
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });
}
