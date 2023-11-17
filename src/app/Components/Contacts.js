import { Buttongray } from "./Buttongray";
export const Contacts = () => {
  return (
    <div className="px-24 py-20 bg-white flex flex-col align-center justify-center gap-12">
      <div>
        <Buttongray text="Get in touch" />
        <div className="w-full flex justify-center">
          <p className="text-center max-w-xl text-xl text-[#4B5563] text-center leading-7 text-xl mt-4">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex gap-5 items-center">
          <div className="w-8 h-8 flex justify-center items-center">
            <img className="object-cover" src="/icon-email.png" />
          </div>
          <p className="font-semibold text-4xl leading-10 text-[#111827]">
            reachsagarshah@gmail.com
          </p>
          <div className="w-8 h-8 flex justify-center items-center">
            <img className="object cover" src="/icon-copy.png" />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="w-8 h-8 flex justify-center items-center">
            <img className="object-cover" src="/phone.png" />
          </div>
          <p className="font-semibold text-4xl leading-10 text-[#111827]">+91 8980500565</p>
          <div className="w-8 h-8 flex justify-center items-center">
            <img className="object cover" src="/icon-copy.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[#4B5563] text-base font-normal leading-6">You may also find me on these platforms!</p>
        <div className="part1TextSocial flex gap-2">
            <img className="w-9 h-9 cursor-pointer" src="/icon_git.png"/>
            <img className="w-9 h-9 cursor-pointer" src="/icon_twitter.png"/>
            <img className="w-9 h-9 cursor-pointer" src="/icon_figma.png"/>
        </div>
      </div>
    </div>
  );
};
