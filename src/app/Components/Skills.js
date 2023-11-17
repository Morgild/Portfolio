import { Buttongray } from "./Buttongray";
import { Planguage } from "./Planguage";
export const Skills = () => {
  return (
    <div className="bg-white px-20 py-24">
      <Buttongray text="Skills" />
      <p className="w-full text-center text-[#4B5563] mt-4 mb-12">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="grid grid-cols-8 grid-rows-2 gap-y-12">
        <Planguage text="Javascript" source="/icon-javscript.svg"/>
        <Planguage text="Typescript" source="/icon-typescript.svg"/>
        <Planguage text="React" source="/icon-react.svg"/>
        <Planguage text="Next.js" source="/icon-nextjs.svg"/>
        <Planguage text="Node.js" source="/icon-nodejs.svg"/>
        <Planguage text="Express.js" source="/icon-express.svg"/>
        <Planguage text="Nest.js" source="/icon-nest.svg"/>
        <Planguage text="Socket.io" source="/icon-socket.png"/>
        <Planguage text="PostgreSQL" source="/icon-postgresql.svg"/>
        <Planguage text="MongoDB" source="/icon-mongodb.svg"/>
        <Planguage text="Sass/Scss" source="/icon-sass.svg"/>
        <Planguage text="Tailwindcss" source="/icon-tailwindcss.svg"/>
        <Planguage text="Figma" source="/icon-figma.svg"/>
        <Planguage text="Cypress" source="/icon-cypress.svg"/>
        <Planguage text="Storybook" source="/icon-storybook.svg"/>
        <Planguage text="Git" source="/icon-git.svg"/>
      </div>
    </div>
  );
};
