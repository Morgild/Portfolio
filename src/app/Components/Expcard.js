import { BulletPoint } from "./Bulletpoint";
export const Expcard = (props) => {
  // const exp=[]
  return (
    <div className="flex md:flex-row gap-4 flex-col w-full p-8 rounded-xl bg-white justify-between items-start dark:bg-[#1F2937]">
      <div className="flex md:w-1/4 w-full items-start justify-start max-w-[206px] order-0">
        <img src={props.logo} />
      </div>
      <div className="flex flex-col md:w-1/2 w-full order-2 gap-4">
        <h3 className="w-full text-xl font-semibold leading-7 text-[#111827] dark:text-[#F9FAFB]">
          {props.position}
        </h3>
        <div className="w-full flex flex-col align-start gap-1 dark:text-[#D1D5DB]">
          {props.jd.map((item) => (
            <BulletPoint bgColor="bg-[#4B5563] dark:bg-[#D1D5DB]" text={item} />
          ))}
        </div>
      </div>
      <div className="flex md:justify-end justify-start leading-6 md:w-1/4 w-full text-base font-normal text-[#374151] order-1 md:order-3 dark:text-[#E5E7EB]">
        {props.duration}
      </div>
    </div>
  );
};
