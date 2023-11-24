import { BulletPoint } from "./Bulletpoint";
import { Buttongray } from "./Buttongray";
export const About = () => {
  return (
    <div id="About" className="bg-[#F9FAFB] md:px-20 md:py-24 px-4 py-16 w-full flex flex-col gap-12 dark:bg-[#111827]">
      <div className="AboutMeTitle flex items-center justify-center w-full">
        <Buttongray text="About me"/>
      </div>
      <div className="AboutMe flex flex-col md:flex-row px-8 gap-12">
      <div className="part1Img md:w-1/2 md:h-[360px] h-[320px] md:max-w-[520px] h-[300px] mx-auto w-[280px] md:ml-[40px] relative">
        <img
          className="border-8 border-white dark:border-[#030712] md:h-[320px] md:w-full h-[280px] md:right-[0%]  md:translate-x-[-60%] md:translate-y-[7%] translate-y-[5%] w-[240px] absolute top-0  left-[50%] translate-x-[-50%] absolute z-[1] object-cover cursor-pointer"
          src="/img_about.png"
        />
        <div className="border-8 border-white dark:border-[#030712] md:h-[320px] md:w-[400px] md:w-full md:right-0 md:translate-x-[-65%] h-[280px] w-[280px] left-[50%] translate-x-[-50%] bottom-0 bg-neutral-400 absolute z-[0] object-cover dark:bg-[#374151]"></div>
      </div>
        <div className="md:w-1/2">
          <h2 className="text-[#111827] dark:text-[#F9FAFB] font-semibold text-3xl leading-9">
            Curious about me? Here you have it:
          </h2>
          <div className="About flex flex-col gap-2 mt-6">
            <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6 text-justify">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6 text-justify">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6 text-justify">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6 text-justify">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6">
              Finally, some quick bits about me.
            </p>
            <div className="flex gap-[10px]">
              <div className="gap-[10px]">
                <div className="flex">
                  <BulletPoint width='4' height='4'bgColor="bg-[#4B5563] dark:bg-[#D1D5DB]" text="" />
                  <span className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6">B.E. in Computer Engineering</span>
                </div>
                <div className="flex">
                  <BulletPoint bgColor="bg-[#4B5563] dark:bg-[#D1D5DB]" width='4' height='4'text=""/>
                  <span className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6">Full time freelancer</span>
                </div>
              </div>
              <div className="gap-[10px]">
                <div className="flex">
                  <BulletPoint bgColor="bg-[#4B5563] dark:bg-[#D1D5DB]" width='4' height='4'text=""/>
                  <span className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6">Avoid learner</span>
                </div>
                <div className="flex">
                  <BulletPoint bgColor="bg-[#4B5563] dark:bg-[#D1D5DB]" width='4' height='4' text=""/>
                  <span className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6">Aspiring indie hacker</span>
                </div>
              </div>
            </div>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] font-normal text-base leading-6"text="">
            One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
