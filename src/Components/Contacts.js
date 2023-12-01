import { Buttongray } from "./Buttongray";
import { CopyIcon } from "./Svg files/CopyIcon";
import { EmailIcon } from "./Svg files/EmailIcon";
import { FigmaIcon } from "./Svg files/FigmaIcon";
import { GitIcon } from "./Svg files/GitIcon";
import { TwitterIcon } from "./Svg files/TwitterIcon";
import { PhoneIcon } from "./Svg files/PhoneIcon";
export const Contacts = () => {
  return (
    <div id='Contact' className="md:px-24 md:py-20 px-4 py-16 bg-white flex flex-col align-center justify-center md:gap-12 gap-6 dark:bg-[#030712]">
      <div>
        <Buttongray text="Get in touch" />
        <div className="w-full flex justify-center">
          <p className="text-center max-w-xl text-xl text-[#4B5563] text-center leading-7 text-xl mt-4 dark:text-[#D1D5DB]">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:gap-4">
        <div className="flex md:gap-5 gap-4 items-center">
          <div className="md:w-8 md:h-8 w-4 h-4 flex justify-center items-center">
            <EmailIcon/>
          </div>
          <p className="font-semibold md:text-4xl text-lg leading-10 text-[#111827] dark:text-[#F9FAFB]">
            reachsagarshah@gmail.com
          </p>
          <div className="md:w-8 md:h-8 w-4 h-4 flex justify-center items-center">
            <CopyIcon/>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="md:w-8 md:h-8 w-4 h-4flex justify-center items-center">
            <PhoneIcon/>
          </div>
          <p className="font-semibold md:text-4xl text-lg leading-10 text-[#111827] dark:text-[#F9FAFB]">+91 8980500565</p>
          <div className="md:w-8 md:h-8 w-4 h-4 flex justify-center items-center">
            <CopyIcon/>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[#4B5563] text-base font-normal leading-6 dark:text-[#D1D5DB]">You may also find me on these platforms!</p>
        <div className="part1TextSocial flex md:gap-4 gap-4">
            <GitIcon/>
            <TwitterIcon/>
            <FigmaIcon/>
        </div>
      </div>
    </div>
  );
};
