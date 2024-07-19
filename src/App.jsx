import Button from "./Button";
import Counts from "./Counts";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Counts />
      <Button />
    </div>
  );
}

export default App;
