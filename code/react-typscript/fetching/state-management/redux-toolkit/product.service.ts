import { ProductType } from "./product.type";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export default class ProductService {
   constructor() {}
   // _get_all_Products
   _get_all_products = createAsyncThunk("product/all_products", async (_, thunkAPI) => {
      try {
         const { data } = await axios.get("https://dummyjson.com/products");
         return data;
      } catch (error: any) {
         console.log(error?.response?.data);
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });

   // _get_Product_info
   _get_product_info = createAsyncThunk("product/product_info", async (id: number, thunkAPI) => {
      try {
         const { data } = await axios.get(`https://dummyjson.com/products/${id}`);
         return data;
      } catch (error: any) {
         return thunkAPI.rejectWithValue(error?.response?.data?.error);
      }
   });
}
