import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Cards from './Components/cards/Cards';
import Footer from './Components/footer/footer';
import Header from './Components/header/Header';
import Navbar from './Components/navbar/Navbar';
import Subscribe from './Components/subscribe/Subscribe';
import Login from './Components/Login/Login';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
      
          <Navbar />
          <Header />
            <Cards />
     
          <Subscribe />
          <Footer />
        </div>
        } />

        <Route path="/Login" element={<Login />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;


 