import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Footer from "./component/Footer";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { ROUTES } from "./constants/routes";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<AboutUs />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
