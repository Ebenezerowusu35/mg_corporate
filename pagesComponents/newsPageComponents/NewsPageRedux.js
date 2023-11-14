'use client'
import ReduxProvider from "@/redux/ReduxProvider";
import React from "react";
import NewsPage from "./NewsPage";

function NewsPageRedux() {
  return (
    <ReduxProvider>
      <NewsPage />
    </ReduxProvider>
  );
}

export default NewsPageRedux;
