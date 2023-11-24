export const BulletPoint = (props) => {
  return (
    <div className={`flex ${props.margin}`}>
      <div className={`w-[24px]  h-[24px] flex justify-center items-center text-[#4B5563]`}>
        <div
          className={`w-1 h-1 ${props.bgColor} rounded-full flex justify-center items-center`}
        ></div>
      </div>
      <p className="flex text-[#4B5563] dark:text-[#D1D5DB] w-full">{props.text}</p>
    </div>
  );
};
