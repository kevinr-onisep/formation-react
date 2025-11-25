import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  let counter: number = 0;

  function upgradeCounter() {
    counter++;
    console.log("Counter : " + counter);
  }

  return (
    <div>
      <Button
        color="red"
        type="button"
        children={"Counter"}
        onButtonClick={() => upgradeCounter()}
      />
      <Button
        color="green"
        type="reset"
        children={"Reset"}
        onButtonClick={() => upgradeCounter()}
      />
      <Button
        color="blue"
        type="submit"
        children={"Submit"}
        onButtonClick={() => upgradeCounter()}
      />
    </div>
  );
}

export default App;
