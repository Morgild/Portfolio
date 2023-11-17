import { BulletPoint } from "./Bulletpoint";
export const Intro = () => {
  return (
    <div className="flex place-content-between px-20 py-24 bg-white">
      <div className="part1Text flex flex-col gap-12 w-8/12">
        <div className="part1TextTitle gap-2 flex max-w-[768px] flex-col">
          <h1 className="font-bold font-inter text-6xl leading-{72px} text-[#111827]">
            Hi, I’m Sagar 👋
          </h1>
          <p className="font-normal text-base text-[#4B5563] leading-6">
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
      <div className="part1Img max-h-[360px] w-3/12 ml-[40px] relative">
        <img
          className="border-8 border-white h-5/6 w-11/12 absolute top-0 left-0 absolute z-[1] object-cover cursor-pointer"
          src="/img_profile.png"
        />
        <div className="border-8 border-white h-5/6 w-11/12 right-0 bottom-0 bg-neutral-400 absolute z-[0] object-cover"></div>
      </div>
    </div>
  );
};
