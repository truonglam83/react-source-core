// src/store/auth/auth.slice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, User } from "@/types/auth.type";

const initialState: AuthState = {
  user: null,
  token: null,
};

/**
 * Auth slice
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Set auth data after login
     */
    setAuth: (
      state,
      action: PayloadAction<{
        user: User;
        token: string;
      }>,
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },

    /**
     * Clear auth (logout)
     */
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
