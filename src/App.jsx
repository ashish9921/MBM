import ContactUsPagePage from "pages/ContactUsPage";
import React from "react";
// import Routes from "./Routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
      <Routes>

        <Route path="/" element={<ContactUsPagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
