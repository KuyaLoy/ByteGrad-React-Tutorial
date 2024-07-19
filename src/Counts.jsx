import { useState } from "react";

export default function Counts() {
  const [number, setNumber] = useState(4);
  return (
    <span
      onClick={() => {
        setNumber(5);
      }}
    >
      {number}
    </span>
  );
}
