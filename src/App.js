import "./App.css";
import Slider from "./Components/Slider";
import About from "./Components/About";
import Services from "./Components/Services";
import Feature from "./Components/Feature";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const imageUrl = "images/bg.png";

  return (
    <div className="App" id="home">
      <Slider />
      <About />
      <Feature />
      <Services />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
