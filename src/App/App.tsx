import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  const [counter, SetCounter] = useState(-1);

  useEffect(() => {
    console.log("Counter : " + counter);
  }, [counter])

  return (
    <div>
      <p style={{ marginBottom: '1rem' }}>
        Counter : {counter}
      </p>
      <Button
        color="red"
        type="button"
        children={"-1"}
        onButtonClick={() => { SetCounter(counter - 1) }}
      />
      <Button
        color="green"
        type="button"
        children={"+1"}
        onButtonClick={() => { SetCounter(counter + 1) }}
      />
    </div>
  );
}

export default App;
