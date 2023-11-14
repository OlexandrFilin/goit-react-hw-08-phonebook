import { configureStore } from '@reduxjs/toolkit';
//import { persistedContactReducer  } from './contactSlice';
import { filterSlice } from './filterSlice'
import { contactSlice } from './contactSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'


export const store = configureStore({
  reducer: {
    //contactsUser: persistedContactReducer,
    contactsUser: contactSlice.reducer,
    filterUser:   filterSlice.reducer,
  },

//  middleware(getDefaultMddleware){
//     const middleware = getDefaultMddleware(
      
//             {serializableCheck: {
//               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             }},
//     );
//     console.log('getDefaultMddleware()', middleware);
//     return middleware;
//   },
  middleware: (getDefaultMiddleware) =>
  
   {
    const middleware =getDefaultMiddleware({
    //   serializableCheck: {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
   })
   // console.log('getDefaultMddleware()', middleware);
  return middleware;
  },
});




//export const persistor = persistStore(store)