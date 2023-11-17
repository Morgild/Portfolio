"use client"
import { Header } from "./Components/Header";
import { Intro } from "./Components/Intro";
import { About } from "./Components/About";
import { Skills } from "./Components/Skills";
import { Experience } from "./Components/Experience";
import { Work } from "./Components/Work";
import { Contacts } from "./Components/Contacts";
import { Footer } from "./Components/Footer";
import { FONT_MANIFEST } from "next/dist/shared/lib/constants";
// import MediQuery from 'react-responsive'
export default function Home() {
  return (
    <>
      <Header />
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
