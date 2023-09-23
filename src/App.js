import "./index.css";
import "./components/styles.css";
import Notes from "./pages/Notes";
import Header from "./components/Header";
import Images from "./pages/Images";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import PrivateRoute from "./utils/PrivateRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/notes" element={<Notes />} />
            <Route path="/images" element={<Images />} />
          </Route>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
