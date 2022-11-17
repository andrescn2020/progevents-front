import { BsCaretRight } from "react-icons/bs";
import { BsCaretLeft } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { changePage, getEvents, getFilter, getFilteredEvents, resetFilters } from '../../actions/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Filtros = () => {

  const dispatch = useDispatch();
  const allFilters = useSelector((state) => state.filters);
  const page = useSelector((state) => state.page);
  const allEvents = useSelector((state) => state.events);
  const filteredEvents = useSelector((state) => state.filterEvents);
  const pagesPerView = useSelector((state) => state.pagesPerView);
  
  let filteredEventsPagination = [];
  let indexOfLastEvent = 0;
  let indexOfFirstEvent = 0;

  useEffect(() => {
    dispatch(getEvents())
  }, []);

  if(page === 1) {
    filteredEventsPagination = filteredEvents;
    filteredEventsPagination = filteredEventsPagination.slice(0,6);
  } else {
    filteredEventsPagination = filteredEvents;
    indexOfLastEvent = page * pagesPerView;
    indexOfFirstEvent = indexOfLastEvent - pagesPerView;
    filteredEventsPagination = filteredEventsPagination.slice(indexOfFirstEvent, indexOfLastEvent);
  }

  console.log(page);

  const handleFilter = (e) => {
    
    dispatch(getFilter(e.target.value, e.target.name))
    dispatch(getFilteredEvents(allFilters))
    
  }

  return (
    <div className="filter-container">
      <div className="container">
        <h1 className="filter-title">Filtros</h1>
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
        <button onClick={() => dispatch(resetFilters())}>Limpiar Filtros</button>
      </div>


      <div className="events-container">
        {filteredEventsPagination?.map((event) => (
          <Card key={event.id} className="card">
            <Card.Img className="card-image" variant="top" src={event.image} />
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>
                Fecha: {event.date.slice(5)}
              </Card.Text>
              <a href={event.eventLink} target="_blank">Registrarse</a>
            </Card.Body>
          </Card>
        ))}
        <BsCaretLeft id={[page - 1, "restar"]} className="previous-icon" onClick={(e) => dispatch(changePage(e.target.id))} size={40} />
        <div>{page}</div>
        <BsCaretRight id={[page + 1, "sumar"]} className="next-icon" onClick={(e) => dispatch(changePage(e.target.id))} size={40} />
      </div>

    </div>

  )

};

export default Filtros;