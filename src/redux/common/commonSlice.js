import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  deviceType: null,
  modalOpened: false,
  modalClosing: false,
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setDeviceType(state, action) {
      state.deviceType = action.payload;
    },
    toggleModal(state, action) {
      state.modalOpened = !state.modalOpened;
      state.modalClosing = false;
    },
    setModalOpened(state, action) {
      state.modalOpened = action.payload;
      state.modalClosing = false;
    },
    setModalClosing(state, action) {
      state.modalClosing = true;
    },
  },
});

export const { setDeviceType, toggleModal, setModalOpened, setModalClosing } =
  commonSlice.actions;
export const commonReducer = commonSlice.reducer;
