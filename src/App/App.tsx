import "./App.css";
import MemeForm from "./components/functionnal/MemeForm/MemeForm";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Footer from "./components/ui/Footer/Footer";
import Header from "./components/ui/Header/Header";
import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";
import Navbar from "./components/ui/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer meme={emptyMeme} image={undefined} basePath="" />
          <MemeForm />
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
