import { useState, useEffect } from "react";
import Home from "./pages/home";
import Show from "./pages/show";
import Navbar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import New from "./pages/new";
import Edit from "./pages/edit";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings/:id" element={<Show />} />
        <Route path="listings/new" element={<New />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
