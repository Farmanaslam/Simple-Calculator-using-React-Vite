import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styles from "./App.module.css";
import Display from "./Components/Display";
import Buttonscontainer from "./Components/Buttonscontainer";
function App() {
  const [displayVal, setDisplayVal] = useState("");
  const onButtonClick = (btnText) => {
    console.log(btnText);
    if (btnText === "C") {
      setDisplayVal(" ");
    } else if (btnText === "=") {
      const result = eval(displayVal);
      setDisplayVal(result);
    } else {
      const newDisplayVal = displayVal + btnText;
      setDisplayVal(newDisplayVal);
    }
  };
  return (
    <>
      <div className={styles.parent}>
        <div id="calculator" className={styles.calculator}>
          <Display displayVal={displayVal} />
          <Buttonscontainer onButtonClick={onButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
