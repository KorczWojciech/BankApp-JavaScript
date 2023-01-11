import "./App.css";
import React from "react";
import LoginForm from "./login";
import Header from "./header";
import Footer from "./footer";
import HomePage from "./home";
import RegistrationForm from "./register";
import ContactForm from "./contact";
import AboutUs from "./aboutus";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HistoryPage from "./history";
import TransferPage from "./transfer";

//Create a route for each page
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<RegistrationForm />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/transfer" element={<TransferPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
