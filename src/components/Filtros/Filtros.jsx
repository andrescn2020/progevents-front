import { BsCaretRight } from "react-icons/bs";
import { BsCaretLeft } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { getEvents, getFilter, getFilteredEvents, resetFilters } from '../../actions/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Filtros = () => {

  const dispatch = useDispatch();
  const allFilters = useSelector((state) => state.filters);
  const loadingEvents = useSelector((state) => state.loading);
  const filteredEvents = useSelector((state) => state.filterEvents);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGES_PER_VIEW = 6;

  let indexOfLastEvent = currentPage * PAGES_PER_VIEW;
  let indexOfFirstEvent = indexOfLastEvent - PAGES_PER_VIEW;
  let currentEvents = [];

  useEffect(() => {
    dispatch(getEvents())
  }, []);

  if (currentPage === 1) {
    currentEvents = filteredEvents;
    currentEvents = currentEvents.slice(0, 6);
  } else {
    currentEvents = filteredEvents;
    indexOfLastEvent = currentPage * PAGES_PER_VIEW;
    indexOfFirstEvent = indexOfLastEvent - PAGES_PER_VIEW;
    currentEvents = currentEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  }

  const handleFilter = (e) => {
    dispatch(getFilter(e.target.value, e.target.name));
    dispatch(getFilteredEvents(allFilters));
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (Math.ceil(filteredEvents.length / 6) === currentPage) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const cleanFilters = () => {
    let fecha = document.getElementsByName("date");
    let formato = document.getElementsByName("format");
    let lenguaje = document.getElementsByName("language");
    let precio = document.getElementsByName("price");
    fecha[0].value = "defaultDate";
    formato[0].value = "defaultFormat";
    lenguaje[0].value = "defaultLanguage";
    precio[0].value = "defaultPrice";
    dispatch(resetFilters());
  }

  const EventContainer = () => {
    if (loadingEvents) {
      return (
        <div className="lds-dual-ring"></div>
      )
    }
    if (currentEvents.length === 0 && !loadingEvents) {
      return (
        <h1 className="filters-dont-found">No se encontraron resultados con los filtros seleccionados</h1>
      )
    }
    if (currentEvents) {
      return (
        <div className="events-container">
          {currentEvents.map((event) => (
            <Card key={event.id} className="card">
              <div className="circle">
                <Card.Text className="card-date">
                  {event.date.slice(5)}
                </Card.Text>
              </div>
              <Card.Img className="card-image" variant="top" src={event.image} />
              <Card.Body>
                <Card.Title className="card-title">{event.title}</Card.Title>
                <a className="link" href={event.eventLink} target="_blank">Registrarse</a>
              </Card.Body>
            </Card>
          ))}
        </div>
      )

    }
  }

  return (
    <div id="filters" className="filter-container">

      <h1 className="filter-title">Filtros</h1>

      <div className="container">

        <select name='date' onChange={handleFilter} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value="defaultDate">Fecha</option>
          <option value="hoy">Hoy</option>
          <option value="mañana">Mañana</option>
          <option value="proximo mes">Próximo mes</option>
        </select>
        <select name="format" onChange={handleFilter} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value="defaultFormat">Formato</option>
          <option value="online">Online</option>
          <option value="presencial">Presencial</option>
        </select>
        <select name="language" onChange={handleFilter} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value="defaultLanguage">Idioma</option>
          <option value="español">Español</option>
          <option value="ingles">English</option>
        </select>
        <select name="price" onChange={handleFilter} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value="defaultPrice">Precio</option>
          <option value="gratis">Gratis</option>
          <option value="con precio">Valor Pagado</option>
        </select>

        <button type="button" onClick={cleanFilters} className="btn btn-secondary">Limpiar Filtros</button>

      </div>
      <div className="section-right-container">
        {/* <div className="events-container">
          {currentEvents ? currentEvents.map((event) => (
            <Card key={event.id} className="card">
              <div className="circle">
                <Card.Text className="card-date">
                  {event.date.slice(5)}
                </Card.Text>
              </div>
              <Card.Img className="card-image" variant="top" src={event.image} />
              <Card.Body>
                <Card.Title className="card-title">{event.title}</Card.Title>
                <a className="link" href={event.eventLink} target="_blank">Registrarse</a>
              </Card.Body>
            </Card>
          )) : <div className="lds-dual-ring"></div>}
        </div> */}
        <EventContainer />


      </div>
      <div className="pagination-container">
        <BsCaretLeft className="previous-icon" onClick={previousPage} />
        <div><h4 className="pagination-text">{currentPage} de {Math.ceil(filteredEvents.length / 6) === 0 ? "1" : Math.ceil(filteredEvents.length / 6)}</h4></div>
        <BsCaretRight className="next-icon" onClick={nextPage} />
      </div>
    </div>
  )

};

export default Filtros;