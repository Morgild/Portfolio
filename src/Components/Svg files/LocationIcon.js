export const LocationIcon = (props) => {
  return (
    <svg
      className="location"
      width={`${props.w}`}
      height={`${props.h}`}
      fill={`${props.fill}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="dark:stroke-[#D1D5DB] stroke-[#4B5563]"
        d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
        strokeWidth="2"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="dark:stroke-[#D1D5DB] stroke-[#4B5563]"
        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
