import React, { useState } from "react";
import styles from "../App.module.css";
const Buttonscontainer = ({ buttonsArr, onButtonClick }) => {
  const buttonArr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonContainer}>
      {buttonArr.map((btnName) => {
        return (
          <button
            key={btnName}
            className={styles.button}
            onClick={() => onButtonClick(btnName)}
          >
            {btnName}
          </button>
        );
      })}
    </div>
  );
};

export default Buttonscontainer;
