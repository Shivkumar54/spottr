import './App.css';
import Cards from './Components/cards/Cards';
import Footer from './Components/footer/footer';
import Header from './Components/header/Header';
import Navbar from './Components/navbar/Navbar';
import Subscribe from './Components/subscribe/Subscribe';


function App() {
  


  return (
    <div className="App">
      
      <Navbar />
      <Header />
        <Cards />
 
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
