import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Layout from "./components/Layout";
import Startseite from "./pages/Startseite";
import Unternehmen from "./pages/Unternehmen";
import Leistungen from "./pages/Leistungen";
import Karriere from "./pages/Karriere";
import Kontakt from "./pages/Kontakt";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import RegistrierungAngestellte from "./pages/RegistrierungAngestellte";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster position="top-right" richColors closeButton />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Startseite />} />
            <Route path="/unternehmen" element={<Unternehmen />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/karriere" element={<Karriere />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/registrierung/angestellte" element={<RegistrierungAngestellte />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
