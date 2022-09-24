import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  countries: [],
  error: null,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.countries = action.payload;
    },
    error: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const getCountryAsync = () => async (dispatch) => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");

    const data = response.data;

    const tempData = [];

    data.map((e) => {
      const item = {
        id: Number(e.ccn3),
        code: e.altSpellings[0],
        name: e.name.common,
        region: e.region,
        capital: e.capital + "",
        flag: e.flags.png,
      };

      tempData.push(item);
    });

    dispatch(getData(tempData));
  } catch (err) {
    dispatch(error(err));
  }
};

export const { getData, error, setTotalPages } = countriesSlice.actions;
export default countriesSlice.reducer;
