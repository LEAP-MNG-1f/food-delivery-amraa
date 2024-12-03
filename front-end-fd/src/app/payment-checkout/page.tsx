"use client";

import React from "react";
import { HeaderPart } from "../_components/Header";
import { Footer } from "../_components/Footer";
import { Main } from "next/document";
import MainCheckout from "./mainCheckout";

export default function page() {
  return (
    <div className="flex flex-col items-center">
      <HeaderPart />
      <div className="container flex min-h-[100vh] ">
        <MainCheckout />
      </div>
      <Footer />
    </div>
  );
}
