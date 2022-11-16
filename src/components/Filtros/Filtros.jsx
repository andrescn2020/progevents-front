import { BsCaretRight } from "react-icons/bs";
import { BsCaretLeft } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { getEvents, getFilter, getFilteredEvents } from '../../actions/actions';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Filtros = () => {

  const dispatch = useDispatch();
  const allFilters = useSelector((state) => state.filters);
  const allEvents = useSelector((state) => state.events);
  const filteredEvents = useSelector((state) => state.filterEvents);
  const PAGES_FOR_VIEW = 6;
  const [pagination, setPagination] = useState(1);
  // const [filters, setFilters] = useState({
  //   date: "",
  //   format: "",
  //   language: "",
  //   price: ""
  // });
  // let filters = {
  //   date: "",
  //   format: "",
  //   language: "",
  //   price: ""
  // }
  let paginationEvents = [];

  useEffect(() => {
    dispatch(getEvents())
  }, [])

  const nextPage = () => {
    setPagination(pagination + 1);
  };

  const previousPage = () => {
    if (pagination === 1) {
      setPagination(1);
    } else {
      setPagination(pagination - 1);
    }
  };

  const handleFilter = (e) => {
    
    dispatch(getFilter(e.target.value, e.target.name))
    dispatch(getFilteredEvents(allFilters))
    
  }

  // if (pagination === 1) {
  //   let indexOfLastEvent = pagination * PAGES_FOR_VIEW;
  //   paginationEvents = paginationEvents.slice(0, indexOfLastEvent);
  // } else if (pagination > 1) {
  //   let indexOfLastEvent = pagination * PAGES_FOR_VIEW;
  //   let indexOfFirstEvent = indexOfLastEvent - PAGES_FOR_VIEW;
  //   let aux = paginationEvents.slice((pagination - 1) * PAGES_FOR_VIEW - PAGES_FOR_VIEW, (pagination - 1) * PAGES_FOR_VIEW);
  //   paginationEvents = paginationEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  //   if (paginationEvents.length === 0) {
  //     setPagination(pagination - 1)
  //     paginationEvents = aux;
  //   }
  // }


  return (
    <div className="filter-container">
      <div className="container">
        <h1 className="filter-title">Filtros</h1>
        <select name='date' onChange={handleFilter} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Fecha</option>
          <option value="hoy">Hoy</option>
          <option value="mañana">Mañana</option>
          <option value="proximo mes">Próximo mes</option>
        </select>
        <select name="format" onChange={handleFilter} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Formato</option>
          <option value="online">Online</option>
          <option value="presencial">Presencial</option>
        </select>
        <select name="language" onChange={handleFilter} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Idioma</option>
          <option value="español">Español</option>
          <option value="ingles">English</option>
        </select>
        <select name="price" onChange={handleFilter} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option selected>Precio</option>
          <option value="gratis">Gratis</option>
          <option value="con precio">Valor Pagado</option>
        </select>
      </div>


      <div className="events-container">
        {filteredEvents?.map((event) => (
          <Card key={event.id} className="card">
            <Card.Img className="card-image" variant="top" src={event.image} />
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>
                Fecha: {event.date.slice(5)}
              </Card.Text>
              <a href={event.eventLink}>Registrarse</a>
            </Card.Body>
          </Card>
        ))}
        <BsCaretLeft className="previous-icon" onClick={previousPage} size={40} />
        <div>{pagination} de {Math.floor(allEvents.length / PAGES_FOR_VIEW)}</div>
        <BsCaretRight className="next-icon" onClick={nextPage} size={40} />
      </div>

    </div>

  )

};

export default Filtros;