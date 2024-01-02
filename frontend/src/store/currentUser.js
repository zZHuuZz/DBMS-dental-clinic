import { createSlice } from '@reduxjs/toolkit'

// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },
    logoutSuccess: (state, action) => {
      state.user = null;
    },
  },
});

// Actions
const { loginSuccess, logoutSuccess } = slice.actions
const login = ({ SDT, userRole, userType }) => (dispatch) => {
    dispatch(loginSuccess({SDT, userRole, userType}));
}
const logout = () => (dispatch) => {
    dispatch(logoutSuccess());
}

export {login, logout};
export default slice.reducer;