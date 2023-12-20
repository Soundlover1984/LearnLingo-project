import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegisterModalOpened: false,
  isLoginModalOpened: false,
  isModalOpened: false,
};
const modalSlice = createSlice({
  name: 'modalopened',
  initialState,
  reducers: {
    setRegisterModalOpened(state, action) {
      state.isRegisterModalOpened = action.payload;
      state.isModalOpened = action.payload;
    },
    setLoginModalOpened(state, action) {
      state.isLoginModalOpened = action.payload;
      state.isModalOpened = action.payload;
    },
    setModalOpened(state, action) {
      state.isRegisterModalOpened = action.payload;
      state.isLoginModalOpened = action.payload;
      state.isModalOpened = action.payload;
    },
  },
});

export const { setRegisterModalOpened, setLoginModalOpened, setModalOpened } =
  modalSlice.actions;
export const modalOpenedReducer = modalSlice.reducer;
