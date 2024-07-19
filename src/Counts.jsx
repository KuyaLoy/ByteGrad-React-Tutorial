import { useEffect } from "react";

export default function Counts({ number }) {
  useEffect(() => {
    document.title = `you clicked ${number}x`;

    return () => {
      document.title = `standard website title`;
    };
  }, [number]);
  return <span className="count">{number}</span>;
}
