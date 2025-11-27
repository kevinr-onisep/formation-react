import "./App.css";
import "./stores/store";
import MemeForm from "./components/functionnal/MemeForm/MemeForm";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import {
  emptyMeme,
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
import { useEffect, useState } from "react";
import { REST_ADR, REST_RESOURCES } from "./constantes/config";

function App() {
  const [current, setCurrent] = useState<MemeInterface>(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([]);

  useEffect(() => {
    fetch(`${REST_ADR}${REST_RESOURCES.images}`)
      .then((r) => r.json())
      .then((arr) => setImages(arr));
  }, []);

  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer
            meme={current}
            image={images.find((img) => img.id === current.imageId)}
            basePath=""
          />
          <MemeForm
            meme={current}
            onMemeChange={(meme) => {
              setCurrent(meme);
            }}
            images={images}
          />
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
