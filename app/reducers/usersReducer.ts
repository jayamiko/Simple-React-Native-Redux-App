import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../actions";
import { UsersState } from "../type/user";

const initialUserState: UsersState = {
  data: [],
  loading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "errer fetch";
      });
  },
});

export const usersReducer = usersSlice.reducer;
