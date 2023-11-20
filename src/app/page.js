"use client"
import { Header } from "./Components/Header";
import { Intro } from "./Components/Intro";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { Work } from "./Components/Work";
import { Contacts } from "./Components/Contacts";
import { Footer } from "./Components/Footer";
export default function Home() {
  return (
    <>
      <Header visible='hidden' />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Work/>
      <Contacts/>
      <Footer/>
    </>
  );
}

