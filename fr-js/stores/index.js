import { configureStore } from "@reduxjs/toolkit";

import countriesSlice from "./countries";

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});
