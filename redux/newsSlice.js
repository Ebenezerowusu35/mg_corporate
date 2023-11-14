import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yearNum: null,
  category: null,
  categorySlug: null,
  currentPage: 1,
  allHomePageTexts: [],
  allAboutPageTexts: [],
  allBrandPageTexts: [],
  allBrands: [],
  allOffices: [],
  allCompanies: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setYear: (state, action) => {
      state.yearNum = action.payload;
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },

    setCategorySlug: (state, action) => {
      state.categorySlug = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setAllHomePageTexts: (state, action) => {
      state.allHomePageTexts = action.payload;
    },
    setAllAboutPageTexts: (state, action) => {
      state.allAboutPageTexts = action.payload;
    },
    setAllBrandPageTexts: (state, action) => {
      state.allBrandPageTexts = action.payload;
    },
    setAllBrands: (state, action) => {
      state.allBrands = action.payload;
    },
    setAllOffices: (state, action) => {
      state.allOffices = action.payload;
    },
    setAllCompanies: (state, action) => {
      state.allCompanies = action.payload;
    },
  },
});

export const {
  setYear,
  setCategory,
  setCategorySlug,
  setCurrentPage,
  setAllHomePageTexts,
  setAllAboutPageTexts,
  setAllBrandPageTexts,
  setAllBrands,
  setAllOffices,
  setAllCompanies
} = newsSlice.actions;

export default newsSlice.reducer;
