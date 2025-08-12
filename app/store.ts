import { configureStore } from "@reduxjs/toolkit";
import { userDetailReducer } from "./reducers/userDetailReducer";
import { usersReducer } from "./reducers/usersReducer";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    userDetail: userDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
