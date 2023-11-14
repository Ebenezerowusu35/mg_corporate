"use client";
import ReduxProvider from "@/redux/ReduxProvider";
import React from "react";
import ContactUsPage from "./ContactUsPage";




function ContactUsReduxPage() {
  return (
    <ReduxProvider>
      <ContactUsPage />
    </ReduxProvider>
  );
}

export default ContactUsReduxPage;
