import * as React from "react";

import Hero from "./_components/Hero";
import { Footer } from "./_components/Footer";
import { HeaderPart } from "./_components/Header";

export default function Home() {
  return (
    <div>
      <HeaderPart />
      <main className="w-full flex flex-col items-center">
        <Hero />
        <Footer />
      </main>
    </div>
  );
}
