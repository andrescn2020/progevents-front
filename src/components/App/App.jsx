import Carrusel from '../Carrusel/Carrusel';
import Filtros from '../Filtros/Filtros';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import { NavBar } from '../NavBar/NavBar';
import { useState, createContext, useEffect } from "react";
import axios from 'axios';

export const EventContext = createContext();

function App() {

  const [events, setEvents] = useState([]);
  const getEvents = async () => {
    const URL = "https://03jw4d3g69.execute-api.us-east-1.amazonaws.com/events";
    const response = await axios.get(URL);
    setEvents(response.data.body);

  }

  useEffect(() => {
    getEvents();
  }, []);

  return (

    <EventContext.Provider value={events}>
      <NavBar />
      <Hero />
      <Carrusel />
      <Filtros />
      <Footer />
    </EventContext.Provider>

  )

};

export default App;
