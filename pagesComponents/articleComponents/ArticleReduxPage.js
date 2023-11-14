"use client";
import ReduxProvider from "@/redux/ReduxProvider";
import React from "react";
import ArticlePage from "./ArticlePage";

function ArticleReduxPage() {
  return (
    <ReduxProvider>
      <ArticlePage />
    </ReduxProvider>
  );
}

export default ArticleReduxPage;
