import "./index.css";
import "./components/styles.css";
import Notes from "./pages/Notes";
import Header from "./components/Header";
import Images from "./pages/Images";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/notes" element={<Notes />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
