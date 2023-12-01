"use client";
import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [mlsec, setMlsec] = useState(0);
  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [color, setColor] = useState("#000000");
  useEffect(() => {
    const cb = () => {
      start ? setMlsec((mlsec) => mlsec + 100) : null;
    };
    const mls = setInterval(cb, 100);
    return () => {
      clearInterval(mls);
    };
  });
  function reset() {
    setStart(false);
    setMlsec(0);
  }
  return (
    <div className=" bg-black h-screen gap-2 w-full flex rounded-md flex-col items-center justify-center  text-white">
      <div
        className={`flex gap-2 w-1/3 h-[50px] justify-between`}
        style={{ backgroundColor: color }}
      >
        <p id="h" className="Hour  w-full text-5xl text-center">
          00
        </p>
        <span className="Hour text-5xl text-center">:</span>
        <p id="m" className="Minute  w-full text-5xl text-center">
          {Math.floor(Math.floor(mlsec / 1000) / 60)}
        </p>
        <span className="Hour text-5xl text-center">:</span>
        <p id="s" className="Second  w-full text-5xl text-center">
          {Math.floor(mlsec / 1000) % 60}
        </p>
        <span className="Hour text-5xl text-center">:</span>
        <p id="mls" className="MilleSecond  w-full text-5xl text-center">
          {Math.floor((mlsec % 1000) / 100)}
        </p>
        <input
          type="color"
          id="color"
          onChange={(event) => {
            setColor(event.target.value);
          }}
          className="w-[100px] h-full"
        />
      </div>
      <div className="flex gap-2 w-1/4">
        <button
          onClick={() => {
            setStart(true);
          }}
          className="bg-green-400 w-full rounded-md"
        >
          Start
        </button>
        <button
          onClick={() => {
            setStart(false);
          }}
          className="bg-red-400 w-full rounded-md"
        >
          Stop
        </button>
        <button onClick={reset} className="bg-yellow-400 w-full rounded-md">
          Reset
        </button>
      </div>
    </div>
  );
}
