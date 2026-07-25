import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { CheckEmail } from "./pages/auth/CheckEmail";
import { MapPage } from "./pages/MapPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/check-email" element={<CheckEmail mode="login" />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup/check-email" element={<CheckEmail mode="signup" />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
