// import axios from 'axios';
import { useContext, useState } from "react";
import { EventContext } from "../App/App";
import Accordion from 'react-bootstrap/Accordion';
import { BsCaretRight } from "react-icons/bs";
import { BsCaretLeft } from "react-icons/bs";
import { BsCheck2 } from "react-icons/bs";
import Card from 'react-bootstrap/Card';

const Filtros = () => {

  const events = useContext(EventContext);
  const PAGES_FOR_VIEW = 6;
  let paginationEvents = events;
  const [pagination, setPagination] = useState(1);

  const [ dateFilter, setDateFilter ] = useState("");
  const [ formatFilter, setFormatFilter ] = useState("");
  const [ languageFilter, setLanguageFilter ] = useState("");
  const [ priceFilter, setPriceFilter ] = useState("");
  
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

  if (pagination === 1) {
    let indexOfLastEvent = pagination * PAGES_FOR_VIEW;
    paginationEvents = paginationEvents.slice(0, indexOfLastEvent);
  } else if (pagination > 1) {
    let indexOfLastEvent = pagination * PAGES_FOR_VIEW;
    let indexOfFirstEvent = indexOfLastEvent - PAGES_FOR_VIEW;
    let aux = paginationEvents.slice((pagination - 1) * PAGES_FOR_VIEW - PAGES_FOR_VIEW, (pagination - 1) * PAGES_FOR_VIEW);
    paginationEvents = paginationEvents.slice(indexOfFirstEvent, indexOfLastEvent);
    if (paginationEvents.length === 0) {
      setPagination(pagination - 1)
      paginationEvents = aux;
    }
  }


  return (
    <div className="filter-container">
      <div className="container">
        <h1 className="filter-title">Filtros</h1>
        <Accordion defaultActiveKey={["0"]} alwaysOpen className="acordeon">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Fecha</Accordion.Header>
            <Accordion.Body name="hoy" className="acordeon-button" as="button" onClick={(e) => setDateFilter(e.target.name)}>
              Hoy
            </Accordion.Body>
            <Accordion.Body name="mañana" className="acordeon-button" onClick={(e) => setDateFilter(e.target.name)} as="button">
              Mañana
            </Accordion.Body>
            <Accordion.Body name="proximo mes" className="acordeon-button" onClick={(e) => setDateFilter(e.target.name)} as="button">
              Próximo mes
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Formato</Accordion.Header>
            <Accordion.Body name="online" className="acordeon-button" onClick={(e) => setFormatFilter(e.target.name)} as="button">
              Online
            </Accordion.Body>
            <Accordion.Body name="presencial" className="acordeon-button" onClick={(e) => setFormatFilter(e.target.name)} as="button">
              Presencial
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Idioma</Accordion.Header>
            <Accordion.Body className="acordeon-button" onClick={(e) => setLanguageFilter(e.target.name)} as="button">
              Español
            </Accordion.Body>
            <Accordion.Body className="acordeon-button"  onClick={(e) => setLanguageFilter(e.target.name)}  as="button">
              English
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Precio</Accordion.Header>
            <Accordion.Body className="acordeon-button"  onClick={(e) => setPriceFilter(e.target.name)} as="button">
              Gratis
            </Accordion.Body>
            <Accordion.Body className="acordeon-button" onClick={(e) => setPriceFilter(e.target.name)} as="button">
              Valor Pagado
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>


      <div className="events-container">
        {paginationEvents?.map((event) => (
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
        <div>{pagination} de {Math.floor(events.length / PAGES_FOR_VIEW)}</div>
        <BsCaretRight className="next-icon" onClick={nextPage} size={40} />
        {/* <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={events[0].image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={events[0].image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card> */}
      </div>
      {/* <div className="container d-grid gap-3">
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={events[0].image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={events[0].image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div> */}

    </div>

  )

};

export default Filtros;