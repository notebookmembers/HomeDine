import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import NoPage from "./pages/NoPage";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>You don&apos;t have any home page</h1>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/404" element={<NoPage />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
