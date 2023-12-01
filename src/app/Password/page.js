"use client";
import { useState, useEffect, useMemo, useRef } from "react";
import { PasswordStrength } from "@/Components/PasswordStrength";

export default function Password() {
  const [pass, setPass] = useState("");
  const [passView, setPassView] = useState("password");
  function togglePassView() {
    if (passView == "password") {
      return setPassView("text");
    } else setPassView("password");
    console.log(passView);
  }
  function passwordValidation(password) {
    let capitalLetter = 0;
    let number = 0;
    let specialCharacter = 0;
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91) {
        capitalLetter++;
      }
      if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58) {
        number++;
      }
      if (password.charCodeAt(i) > 33 && password.charCodeAt(i) < 47) {
        specialCharacter++;
      }
      if (password.charCodeAt(i) > 57 && password.charCodeAt(i) < 65) {
        specialCharacter++;
      }
    }
    if (password.length==0) {
      return "";
    }

    if (password.length < 8) {
      return "Password length should be min 8 character";
    }
    if (number == 0) {
      return "Password should include number";
    }
    if (capitalLetter == 0) {
      return "Password should include CAPITAL letter";
    }
    if (specialCharacter == 0) {
      return "Password should include special character";
    } else return "Password valid";
  }
  function setPassStrength(passwordStatus) {
    if(passwordStatus=="") return "";
   if(passwordStatus=="Password length should be min 8 character") return "Weak";
   if(passwordStatus=="Password should include number") return "Weak"
   if(passwordStatus=="Password should include CAPITAL letter") return "Medium"
    if(passwordStatus=="Password should include special character") return "Medium"
    if(passwordStatus=="Password valid") return"Strong"
  }

  return (
    <div className=" bg-black h-screen gap-2 w-full flex rounded-md flex-col items-center justify-center  text-white">
      <div className={`flex flex-col gap-5 w-1/2 h-[50px] justify-between relative`}>
        <div className="flex h-[30px]">
          <input
            type={`${passView}`}
            id="color"
            placeholder="Please insert password"
            onChange={(event) => {
              setPass(passwordValidation(event.target.value));
            }}
            className="w-full  text-black"
          />
          <div className="flex bg-white items-center justify-center">
            <img
              className="h-[30px] bg-white"
              src={passView == "password" ? "/eye.jpeg" : "/hide.png"}
              onClick={() => {
                togglePassView();
              }}
            />
          </div>
        </div>
        <div className="flex w-full ">
          <PasswordStrength pass={pass} setPassStrength={setPassStrength} />
        </div>
        <div className="flex flex-col gap-5">
          <p className="w-full text-white">{pass}</p>
          <button className="bg-green-400 w-1/4 m-auto rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
