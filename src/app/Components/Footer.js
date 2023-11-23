import { CopyrightIcon } from "./Svg files/CopyrightIcon";
export const Footer = (props) => {
  return (
    <div className="bg-[#F9FAFB] dark:bg-[#111827] md:px-20 md:py-6 px-8 py-4 dark:py-4 flex gap-2 justify-center items-start">
      <CopyrightIcon />
      <p className="text-sm text-[#4B5563] text-center font-normal dark:text-white">
        2023 | Designed and coded with ❤️️ by Sagar Shah
      </p>
    </div>
  );
};
