import { BulletPoint } from "./Bulletpoint";
export const About = () => {
  return (
    <div className="bg-[#F9FAFB] px-20 py-24 w-full flex flex-col gap-12">
      <div className="AboutMeTitle flex items-center justify-center w-full">
        <span className="bg-[#E5E7EB] px-5 py-1 rounded-[12px] justify-self-center text-[#4B5563] text-sm font-medium leading-5 cursor-pointer">
          About me
        </span>
      </div>
      <div className="AboutMe flex px-8 gap-12">
        <div className="part1Img max-h-[360px] w-1/2 ml-[40px] relative">
          <img
            className="border-8 border-white h-5/6 w-11/12 absolute top-0 right-0 absolute z-[1] object-cover cursor-pointer"
            src="/img_about.png"
          />
          <div className="border-8 border-white h-5/6 w-11/12 left-0 bottom-0 bg-neutral-400 absolute z-[0] object-cover"></div>
        </div>
        <div className="w-1/2">
          <h2 className="text-[#111827 font-semibold text-3xl leading-9]">
            Curious about me? Here you have it:
          </h2>
          <div className="About flex flex-col gap-2 mt-6">
            <p className="text-[#4B5563] font-normal text-base leading-6">
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p className="text-[#4B5563] font-normal text-base leading-6">
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p className="text-[#4B5563] font-normal text-base leading-6">
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p className="text-[#4B5563] font-normal text-base leading-6">
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p className="text-[#4B5563] font-normal text-base leading-6">
              Finally, some quick bits about me.
            </p>
            <div className="flex gap-[10px]">
              <div className="gap-[10px]">
                <div className="flex">
                  <BulletPoint width='4' height='4'bgColor="bg-[#4B5563]" text="" />
                  <span className="text-[#4B5563] font-normal text-base leading-6">B.E. in Computer Engineering</span>
                </div>
                <div className="flex">
                  <BulletPoint bgColor="bg-[#4B5563]" width='4' height='4'text=""/>
                  <span className="text-[#4B5563] font-normal text-base leading-6">Full time freelancer</span>
                </div>
              </div>
              <div className="gap-[10px]">
                <div className="flex">
                  <BulletPoint bgColor="bg-[#4B5563]" width='4' height='4'text=""/>
                  <span className="text-[#4B5563] font-normal text-base leading-6">Avoid learner</span>
                </div>
                <div className="flex">
                  <BulletPoint bgColor="bg-[#4B5563]" width='4' height='4' text=""/>
                  <span className="text-[#4B5563] font-normal text-base leading-6">Aspiring indie hacker</span>
                </div>
              </div>
            </div>
            <p className="text-[#4B5563] font-normal text-base leading-6"text="">
            One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
