import { createSlice } from "@reduxjs/toolkit";
import * as FileSystem from "expo-file-system";
import Product from "../models/Product";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct:(state,action)=>{
      const newProduct = new Product(Date.now(),action.payload.title,action.payload.image);
      state.products.push(newProduct);
    }
  },
});

export const {addProduct} = productSlice.actions;

export const saveProduct = (title,image)=>{
  return async (dispatch)=>{
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try{
      await FileSystem.moveAsync({
        from:image,
        to:Path,
      })
    }catch(error){
      throw error;
    }
    dispatch(addProduct({title,image:Path}))
  }
}

export default productSlice.reducer;
