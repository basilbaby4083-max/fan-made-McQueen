import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Explore from "./pages/Explore";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gallery"  element={<Gallery/>}/>
        <Route path="/About" element ={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;