import './App.css'
import Button from './components/ui/Button/Button';

function App() {
  return <div>
    <Button children={"Bouton"}></Button>
    <Button children={"Reset"} type='reset' />
    <Button children={"Submit"} type='submit' />
  </div>
}

export default App