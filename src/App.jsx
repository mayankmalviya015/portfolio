import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";

function App() {
return ( <BrowserRouter> <Navbar />

  <main>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </main>
</BrowserRouter>


);
}

export default App;
