"use client";

import { Header } from "./Components/Header";
import { Intro } from "./Components/Intro";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { Work } from "./Components/Work";
import { Contacts } from "./Components/Contacts";
import { Footer } from "./Components/Footer";
import { useRef, useState } from "react";

export default function Home() {
  const [isOnDarkMode, setIsOnDarkMode] = useState(false);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      id="root"
      className={`${isOnDarkMode ? "dark" : undefined} max-w-[1536px] m-auto`}
    >
      <Header setIsOnDarkMode={setIsOnDarkMode} darkModeOn={isOnDarkMode} />
      <Intro />
      <About />
      <Skills setIsOnDarkMode={setIsOnDarkMode} darkModeOn={isOnDarkMode} />
      <Experience />
      <Work />
      <Contacts />
      <Footer />
    </div>
  );
}
