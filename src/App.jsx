import { useState } from "react";
import Button from "./Button";
import Counts from "./Counts";

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {number < 3 ? <Counts number={number} /> : null}
      <Button setNumber={setNumber} />
    </div>
  );
}

export default App;
