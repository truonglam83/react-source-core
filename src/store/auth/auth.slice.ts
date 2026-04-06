import { AuthState } from "./auth.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
  accessToken: null,
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    /**
     * Set auth info (login success)
     */
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },

    /**
     * Clear auth (logout)
     */
    clearAuth: (state) => {
      state.accessToken = null;
      state.user = null;
    },

    /**
     * TODO: Maybe add refresh token logic here in the future
     * - setRefreshToken
     * - clearRefreshToken
     * - refreshAccessToken (async thunk)
     */
  },
});

export const { setAuth, clearAuth } = authSlice.actions;

export default authSlice.reducer;
