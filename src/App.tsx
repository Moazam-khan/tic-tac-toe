import { AppLayout } from "@/components";

import "@/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/Login';
import SignupPage from './pages/SignupPage';
import GamePage from './pages/GamePage';
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <AppLayout >
      <Routes>
       
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/" element={<LoginPage />} /> {/* Redirect to Login */}
   
      </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
