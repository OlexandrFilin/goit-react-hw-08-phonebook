import { configureStore } from '@reduxjs/toolkit';
//import { persistedContactReducer  } from './contactSlice';
import { filterSlice } from './contacts/filterSlice'
import { contactSlice } from './contacts/contactSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/auth_slice';

/// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};



export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contactsUser: contactSlice.reducer,
    filterUser:   filterSlice.reducer,
  },
  

  middleware: (getDefaultMiddleware) =>
  
   {
    const middleware =getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   })
   // console.log('getDefaultMddleware()', middleware);
  return middleware;
  },
});




export const persistor = persistStore(store)