import './App.css';
import Slider from './Components/Slider';
import About from './Components/About';
import Services from './Components/Services';
import Feature from './Components/Feature';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
    
      <Slider/>
      <About/>
      <Feature/>
      
      <Services/>
      <Portfolio/>
      <Footer/>


    </div>
  );
}

export default App;
