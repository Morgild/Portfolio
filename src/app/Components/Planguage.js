export const Planguage = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img className="w-16 h-16" src={`${props.source}`} />
      <p>{props.text}</p>
    </div>
  );
};
