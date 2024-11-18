"use client";

import Image from "next/image";
import { useEffect } from "react";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8888/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="w-full flex flex-col items-center">

      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
