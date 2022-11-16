import Carrusel from '../Carrusel/Carrusel';
import Filtros from '../Filtros/Filtros';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import {NavBar} from '../NavBar/NavBar';

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Carrusel />
      <Filtros />
      <Footer />
    </div>
  )

};

export default App;
