import React from "react";
import styles from "../App.module.css";
const Display = ({ displayVal }) => {
  return (
    <div>
      <input
        id="display"
        type="text"
        className={styles.display}
        value={displayVal}
        readOnly
      ></input>
    </div>
  );
};

export default Display;
