export const BulletPoint = (props) => {
  return (
    <div className="flex">
      <div className="w-[24px] h-[24px] flex items-center justify-center text-[#4B5563]">
        <div
          className={`w-${props.w} h-${props.h} ${props.bgColor} rounded-full`}
        ></div>
      </div>
      <p>{props.text}</p>
    </div>
  );
};
