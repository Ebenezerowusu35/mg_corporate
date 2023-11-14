"use client";
import ReduxProvider from "@/redux/ReduxProvider";
import React from "react";
import CompaniesPage from "./CompaniesPage";

function CompaniesReduxPage() {
  return (
    <ReduxProvider>
      <CompaniesPage />
    </ReduxProvider>
  );
}

export default CompaniesReduxPage;
