import "./App.css";
import MemeForm from "./components/functionnal/MemeForm/MemeForm";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import { emptyMeme, MemeSVGViewer, type MemeInterface } from "orsys-tjs-meme";
import { useState } from "react";

function App() {
  const[current, setCurrent] = useState<MemeInterface>(emptyMeme);

  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer meme={current} image={undefined} basePath="" />
          <MemeForm meme={current} onMemeChange={meme => { setCurrent(meme) }} />
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
