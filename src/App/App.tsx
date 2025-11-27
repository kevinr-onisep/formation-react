import "./App.css";
import FlexH1stGrow from "./components/layout/FlexH1stGrow/FlexH1stGrow";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import MemeSVGViewer from "./components/ui/MemeSVGViewer/MemeSVGViewer.connected";
import MemeForm from "./components/functionnal/MemeForm/MemeForm.connected";

function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <FlexH1stGrow>
          <MemeSVGViewer />
          <MemeForm />
        </FlexH1stGrow>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
