import { BulletPoint } from "./Bulletpoint";
import { LocationIcon } from "./Svg files/LocationIcon";
import { GitIcon } from "./Svg files/GitIcon";
import { TwitterIcon } from "./Svg files/TwitterIcon";
import { FigmaIcon } from "./Svg files/FigmaIcon";
export const Intro = () => {
  // const [] = useDark();
  return (
    <div className="flex flex-col flex-col-reverse md:flex-row place-content-between md:px-20 md:py-24 px-4 py-16 bg-white dark:bg-[#030712]">
      <div className="part1Text flex flex-col gap-12 md:w-8/12">
        <div className="part1TextTitle gap-2 flex max-w-[768px] flex-col mt-12 dark:text-[#F9FAFB]">
          <h1 className="font-bold md:font-inter md:text-6xl text-4xl font-semibold  leading-{72px} text-[#111827] dark:text-[#F9FAFB]">
            Hi, I’m Sagar 👋
          </h1>
          <p className="font-normal text-base text-[#4B5563] leading-6 text-justify dark:text-[#D1D5DB]">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div className="part1TextLocation flex flex-col gap-2">
          <div className="flex gap-2">
              <LocationIcon w="24" h="24" fill="none"/>
            <span className="text-[#4B5563] dark:text-[#D1D5DB]">
              Ahmedabad, India
            </span>
          </div>
          <div className="flex justify-c items-center">
            <div className="flex gap-2">
              <BulletPoint
                bgColor="bg-[#10B981] w-2 h-2"
                text="Available for new projects"
                margin='gap-2'
              />
            </div>
          </div>
        </div>
        <div className="part1TextSocial flex items-center gap-4">
          <GitIcon/>
          <TwitterIcon/>
          <FigmaIcon/>
        </div>
      </div>
      <div className="part1Img md:h-[360px]  h-[320px] md:w-[400px] h-[300px] mx-auto w-[280px] md:ml-[40px] relative">
        <img
          className="border-8 border-white dark:border-[#030712] md:h-[320px] md:w-[280px] h-[280px] md:right-[50%]  md:translate-x-[-60%] md:translate-y-[5%] translate-y-[5%] w-[240px] absolute top-0  left-[50%] translate-x-[-50%] absolute z-[1] object-cover cursor-pointer"
          src="/img_profile.png"
        />
        <div className="border-8 border-white dark:border-[#030712] md:h-[320px] md:w-[280px] md:right-0 h-[280px] w-[280px] left-[50%] translate-x-[-50%] bottom-0 bg-neutral-400 absolute z-[0] object-cover dark:bg-[#374151]"></div>
      </div>
    </div>
  );
};
