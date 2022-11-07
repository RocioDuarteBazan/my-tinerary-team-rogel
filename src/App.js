import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound"
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Cities from "./pages/Cities";
import Hotels from './pages/Hotels';
import DetailCity from "./pages/DetailCity";
import NewCity from "./pages/NewCity";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/*" element={<NotFound />} /> 
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />  
        <Route path="/Cities" element={<Cities />} />
        <Route path="/Hotels" element={<Hotels />} />    
        <Route path="/NewCity" element={<NewCity />} />    

      </Routes>
    </Layout>
  );
}

export default App;