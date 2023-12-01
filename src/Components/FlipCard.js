import React from "react";
import { useState } from "react";
import styles from "./style.module.css";
import { useFlip } from "@/app/FlipMatch/page";

let flipCount = 0;
export const FlipCard = (props) => {
  const { isFlip, setIsFlip} = useFlip();
  function flipCard() {
    setIsFlip((prev)=>!prev);
   flipCount++; 
  }

  return (
    <div
      onClick={(event) => {
        (event.target.parentNode.style.transform="rotateY(180deg)"),
        flipCard();
      }}
      id={props.id}
      className={`${styles.flipCard}`}
      style={{ order: props.order, zIndex: props.zIndex }}
    >
      <div
        className={`${styles.flipCardInner}`}
        style={{
          transform: isFlip ? "rotateY(180deg)" : "rotate(0deg)",
        }}
      >
        <div className={styles.flipCardBack}>
          <img className="h-2/5 w-2/5" src={props.source} />
        </div>
        <div
          className={`${styles.flipCardFront} flex flex-col object-contain items-center justify center`}
        ></div>
      </div>
    </div>
  );
};
