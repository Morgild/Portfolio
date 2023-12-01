"use client";

import { Header } from "../Components/Header";
import { Intro } from "../Components/Intro";
import { About } from "../Components/About";
import { Skills } from "../Components/Skills";
import { Experience } from "../Components/Experience";
import { Work } from "../Components/Work";
import { Contacts } from "../Components/Contacts";
import { Footer } from "../Components/Footer";
import { createContext, useState, useContext } from "react";

export const DarkContext = createContext();

export default function Home() {
  const [isOnDarkMode, setIsOnDarkMode] = useState(true);
  return (
    <DarkContext.Provider value={{ isOnDarkMode, setIsOnDarkMode }}>
      <div
        id="root"
        className={`${isOnDarkMode ? "dark" : undefined} max-w-[1536px] m-auto`}
      >
        <Header/>
        <Intro />
        <About />
        <Skills/>
        <Experience />
        <Work />
        <Contacts />
        <Footer />
      </div>
    </DarkContext.Provider>
  );
}
export const useDark = () => useContext(DarkContext);
