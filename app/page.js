'use client'
import React from "react";
import ReduxProvider from "@/redux/ReduxProvider";
import Hompage from "@/pagesComponents/homePageComponents/Hompage";

const page = () => {
  return (
    <ReduxProvider>
      <Hompage />
    </ReduxProvider>
  );
};
export default page;
