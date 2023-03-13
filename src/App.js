import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignupPage } from "./Routes.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
