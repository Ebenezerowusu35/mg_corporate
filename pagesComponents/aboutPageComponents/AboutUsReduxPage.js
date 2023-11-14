"use client";
import React from "react";
import ReduxProvider from "@/redux/ReduxProvider";
import AboutUSPage from "@/pagesComponents/aboutPageComponents/AboutUsPage";
function AboutUsReduxPage() {
  return (
    <ReduxProvider>
      <AboutUSPage />
    </ReduxProvider>
  );
}

export default AboutUsReduxPage;
