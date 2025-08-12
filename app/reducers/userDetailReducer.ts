import { createSlice } from "@reduxjs/toolkit";
import { fetchUserDetail } from "../actions";
import { UserDetailState } from "../type/user";

const initialUserDetailState: UserDetailState = {
  data: null,
  loading: false,
  error: null,
};

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: initialUserDetailState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const userDetailReducer = userDetailSlice.reducer;
