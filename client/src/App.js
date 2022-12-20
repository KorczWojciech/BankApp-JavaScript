import './App.css';
import React from 'react';
import LoginForm from './login';
import Header from './header';
import Footer from './footer';
import HomePage from './home';
import RegistrationForm from './register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//Create a route for each page
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/signup" element={<RegistrationForm/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;