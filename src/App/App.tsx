import './App.css'
import Button from './components/ui/Button/Button';

function App() {
  return <div>
    <Button children={"Bouton"} color='tomato'></Button>
    <Button children={"Reset"} color='green' type='reset' />
    <Button children={"Submit"} color='blue' type='submit' />
  </div>
}

export default App