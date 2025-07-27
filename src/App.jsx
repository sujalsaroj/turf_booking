import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Herosection";
import Footer from "./components/Footer";
import AppRoutes from "./routes/Approutes";
import Features from "./components/Feacture";
import Guide from "./components/step_to_guide";
import TopTurf from "./components/topturf";
import Testinomial from "./components/Testinomial";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
