import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refresh} from './Auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingCurrent: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state,_) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [refresh.pending](state) {
      state.isRefreshingCurrent = true;
    },
    [refresh.fulfilled](state, action) {
      state.user = {...action.payload};
      state.isLoggedIn = true;
      state.isRefreshingCurrent = false;
    },
    [refresh.rejected](state) {
      state.isRefreshingCurrent = false;
    },
  },
});

export default authSlice.reducer;