import { BulletPoint } from "./Bulletpoint";
export const Intro = () => {
  return (
    <div className="flex flex-col flex-col-reverse md:flex-row place-content-between md:px-20 md:py-24 px-4 py-16 bg-white">
      <div className="part1Text flex flex-col gap-12 md:w-8/12">
        <div className="part1TextTitle gap-2 flex max-w-[768px] flex-col mt-12">
          <h1 className="font-bold md:font-inter md:text-6xl text-4xl font-semibold  leading-{72px} text-[#111827]">
            Hi, I’m Sagar 👋
          </h1>
          <p className="font-normal text-base text-[#4B5563] leading-6 text-justify">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="part1TextLocation flex flex-col gap-2">
          <div className="flex gap-2">
            <img className="w-{24px} h-{24px}" src="/icon_location.svg" />
            <span className="text-[#4B5563]">Ahmedabad, India</span>
          </div>
          <div className="flex items-center">
            <div className="flex gap-2">
            <BulletPoint bgColor="bg-[#10B981]" width="4" height="4" text=""/>
            <span className="text-[#4B5563]">Available for new projects</span>
            </div>
          </div>
        </div>
        <div className="part1TextSocial flex gap-2">
            <img className="w-9 h-9 cursor-pointer" src="/icon_git.png"/>
            <img className="w-9 h-9 cursor-pointer" src="/icon_twitter.png"/>
            <img className="w-9 h-9 cursor-pointer" src="/icon_figma.png"/>
        </div>
      </div>
      <div className="part1Img md:h-[360px]  h-[320px] md:w-[400px] h-[300px] mx-auto w-[280px] md:ml-[40px] relative">
        <img
          className="border-8 border-white md:h-[320px] md:w-[280px] md:left-0 h-[280px] w-[240px] absolute top-0 md:bottom-0 md:right-0 left-[50%] translate-x-[-50%] md:translate-x-0 absolute z-[1] object-cover cursor-pointer"
          src="/img_profile.png"
        />
        <div className="border-8 border-white md:h-[320px] md:w-[280px] md:right-0 h-[280px] w-[280px] left-[50%] translate-x-[-50%] bottom-0 bg-neutral-400 absolute z-[0] object-cover"></div>
      </div>
    </div>
  );
};
