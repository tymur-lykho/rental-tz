import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";

import filtersReducer from "./filters/slice";
import carsReducer from "./cars/slice";

// const persistConfig = {
//   key: "auth",
//   storage,
//   whitelist: ["token"],
// };

// const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cars: carsReducer,
    // auth: persistedAuthReducer,
    // recipes: RecipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
