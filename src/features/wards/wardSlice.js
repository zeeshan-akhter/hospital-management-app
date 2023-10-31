import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWards = createAsyncThunk("/wards/fetchWards", async () => {
  const response = await axios.get(
    "https://hospitalmanagementapi.zeeshanakhter.repl.co/wards"
  );
  return response?.data?.data;
});
export const addWards = createAsyncThunk(
  "/wards/addWards",
  async (bodyData) => {
    const response = await axios.post(
      "https://hospitalmanagementapi.zeeshanakhter.repl.co/wards",
      bodyData
    );
    return response.data.data;
  }
);
export const deleteWardData = createAsyncThunk(
  "/wards/deleteWardData",
  async (id) => {
    const response = await axios.delete(
      `https://hospitalmanagementapi.zeeshanakhter.repl.co/wards/${id}`
    );
    return response.data.data;
  }
);

export const updateWards = createAsyncThunk(
  "/wards/updateWards",
  async ({ id, formData }) => {
    const response = await axios.put(
      `https://hospitalmanagementapi.zeeshanakhter.repl.co/wards/${id}`,
      formData
    );
    return response.data.data;
  }
);
export const wardSlice = createSlice({
  name: "wards",
  initialState: {
    wards: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchWards.fulfilled]: (state, action) => {
      console.log(action);
      state.wards = action.payload;
      state.status = "success";
      state.error = null;
    },
    [fetchWards.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [fetchWards.pending]: (state) => {
      state.status = "loading";
    },
    [addWards.fulfilled]: (state, action) => {
      state.wards = [action.payload, ...state.wards];
      state.status = "success";
      state.error = null;
    },
    [addWards.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [addWards.pending]: (state) => {
      state.status = "loading";
    },
    [deleteWardData.fulfilled]: (state, action) => {
      state.wards = action.payload;
      state.status = "success";
      state.error = null;
    },
    [deleteWardData.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "success";
    },
    [deleteWardData.pending]: (state) => {
      state.status = "loading";
    },
    [updateWards.fulfilled]: (state, action) => {
      state.wards = action.payload;
      state.status = "success";
      state.error = null;
    },
    [updateWards.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = "success";
    },
    [updateWards.pending]: (state) => {
      state.status = "loading";
    },
  },
});

export default wardSlice.reducer;
