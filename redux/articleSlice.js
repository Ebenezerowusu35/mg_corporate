import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentIndex: 0,
  postIds: new Map(),
  arrayIds: [],
  years: [],
  posts: [],
  categoryIds: new Map(),
  currentCatIndx: 0,
  allArticles: [],
  allArticlesIds:[],
};

export const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setPostIds: (state, action) => {
      state.postIds = action.payload;
    },
    setCurrentIdx: (state, action) => {
      state.currentIndex = action.payload;
    },
    setCurrentCatIndx: (state, action) => {
      state.currentCatIndx = action.payload;
    },
    setArrayIds: (state, action) => {
      state.arrayIds = action.payload;
    },
    setYears: (state, action) => {
      state.years = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setCategoryIds: (state, action) => {
      state.categoryIds = action.payload;
    },
    setAllArticles: (state, action) => {
      state.allArticles = action.payload;
    },
    setAllArticlesIds: (state, action) => {
      state.allArticlesIds = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPostIds,
  setCurrentIdx,
  setYears,
  setArrayIds,
  setPosts,
  setCategoryIds,
  setCurrentCatIndx,
  setAllArticles,
  setAllArticlesIds
} = articleSlice.actions;

export default articleSlice.reducer;
