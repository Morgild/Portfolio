import { Buttongray } from "./Buttongray";
import { Planguage } from "./Planguage";
import { useDark } from "@/app/page";
export const Skills = (props) => {
  const { isOnDarkMode, setIsOnDarkMode } = useDark();
  return (
    <div
      id="Testimonials"
      className="bg-white md:px-20 md:py-24 px-4 py-16 dark:bg-[#030712]"
    >
      <Buttongray text="Skills" />
      <p className="w-full text-center text-[#4B5563] dark:text-[#D1D5DB] mt-4 mb-12">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="grid md:grid-cols-8 grid-cols-3 md:gap-12 gap-6 ">
        <Planguage
          className="dark:text-[#D1D5DB]"
          text="Javascript"
          source="/icon-javscript.svg"
        />
        <Planguage text="Typescript" source="/icon-typescript.svg" />
        <Planguage text="React" source="/icon-react.svg" />
        <Planguage text="Next.js" source="/icon-nextjs.svg" />
        <Planguage text="Node.js" source="/icon-nodejs.svg" />
        <Planguage
          text="Express.js"
          source={
            !isOnDarkMode ? "/icon-express.svg" : "/icon-express_dark.png"
          }
        />
        <Planguage text="Nest.js" source="/icon-nest.svg" />
        <Planguage
          text="Socket.io"
          source={!isOnDarkMode ? "/icon-socket.png" : "/icon-socket_dark.png"}
        />
        <Planguage text="PostgreSQL" source="/icon-postgresql.svg" />
        <Planguage text="MongoDB" source="/icon-mongodb.svg" />
        <Planguage text="Sass/Scss" source="/icon-sass.svg" />
        <Planguage text="Tailwindcss" source="/icon-tailwindcss.svg" />
        <Planguage text="Figma" source="/icon-figma.svg" />
        <Planguage
          text="Cypress"
          source={
            !isOnDarkMode ? "/icon-cypress.svg" : "/icon-cypress_dark.png"
          }
        />
        <Planguage text="Storybook" source="/icon-storybook.svg" />
        <Planguage text="Git" source="/icon-git.svg" />
      </div>
    </div>
  );
};
