"use client";

import React from "react";
import { HeaderPart } from "../_components/Header";
import MainAdminPage from "./MainAdminPage";
import { Footer } from "../_components/Footer";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <HeaderPart />
      <div className="container flex">
        <MainAdminPage />
      </div>
      <Footer />
    </div>
  );
}
