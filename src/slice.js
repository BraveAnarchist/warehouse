import { createSlice } from "@reduxjs/toolkit";
import arr from "./components/warehouses";

export const slice = createSlice({
  name: "warehouse",
  initialState: {
    array: [...arr],
  },
  reducers: {
    UPDATE: function (state, action) {
 
      state.counter = state.array.map((ele)=>{
        if(action.payload.id== ele.id){
          let attri=action.payload.e.target.name;
          console.log(attri)
          ele[attri]=action.payload.e.target.value;
          console.log(action.payload.e.target.value);
        }
        return ele;
      });
    },
  },
});

export const { UPDATE } = slice.actions;
export const wareH = slice.reducer;