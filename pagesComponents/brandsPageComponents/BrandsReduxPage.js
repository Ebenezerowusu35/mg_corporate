"use client";
import ReduxProvider from "@/redux/ReduxProvider";
import React from "react";
import BrandsPage from "./BrandsPage";

function BrandsReduxPage() {
  return (
    <ReduxProvider>
      <BrandsPage />
    </ReduxProvider>
  );
}

export default BrandsReduxPage;
