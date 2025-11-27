import "./App.css";
import FlexV3rdGrow from "./components/layout/FlexV3rdGrow/FlexV3rdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Thumbnail from "./pages/Thumbnail";
import Editor from "./pages/Editor";

function App() {
  return (
    <div className="App">
      <FlexV3rdGrow>
        <Header />
        <Navbar />
        <Routes>
          <Route Component={Home} path="/home"></Route>
          <Route Component={Thumbnail} path="/thumbs"></Route>
          <Route Component={Editor} path="/editor"></Route>
          <Route Component={Editor} path="/editor/:id"></Route>
        </Routes>
        <Footer />
      </FlexV3rdGrow>
    </div>
  );
}

export default App;
