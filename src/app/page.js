"use client";

import { Header } from "./Components/Header";
import { Intro } from "./Components/Intro";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { Work } from "./Components/Work";
import { Contacts } from "./Components/Contacts";
import { Footer } from "./Components/Footer";
import { useState } from "react";

export default function Home() {
  const [isOnDarkMode, setIsOnDarkMode] = useState(false);

  return (
    <div id="root" className={isOnDarkMode ? "dark" : undefined}>
      <Header setIsOnDarkMode={setIsOnDarkMode} darkModeOn={isOnDarkMode} />
      <Intro />
      <About />
      <Skills setIsOnDarkMode={setIsOnDarkMode} darkModeOn={isOnDarkMode}  />
      <Experience />
      <Work />
      <Contacts />
      <Footer />
    </div>
  );
}
