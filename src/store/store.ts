// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // in the future, we can add more reducers here, e.g.:
    // user: userReducer,
    // course: courseReducer,
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
