import logo from "./logo.svg";

import {Route, Router, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route  path="/login" element={<LoginPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
    </Routes>
  );
}

export default App;
