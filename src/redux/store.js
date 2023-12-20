import { configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice.js';
import storage from 'redux-persist/lib/storage';
import { teachersReducer } from './teachers/teachersSlice.js';
import { userReducer } from './user/userSlice.js';
import { modalOpenedReducer } from './modal/modalSlice.js';
import { loadingReducer } from './loader/loaderSlice.js';
import { commonReducer } from './common/commonSlice.js';


const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    teachers: teachersReducer,
    user: userReducer,
    modal: modalOpenedReducer,
    loading: loadingReducer,
    common: commonReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
