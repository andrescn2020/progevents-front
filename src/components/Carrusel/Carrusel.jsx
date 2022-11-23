import Carousel from 'react-bootstrap/Carousel';
import Arrow from "../../assets/Arrow 3.png"
import { useSelector } from 'react-redux';

function Carrusel() {

  const allEvents = useSelector((state) => state.events);

  return (
    <div className='full-container'>
      <div className='next-events'>
        <h2 className='subtitle'>Eventos Destacados</h2>
        <div className='arrow-container'>
          <img className='arrow' src={Arrow} alt="asd" />
        </div>
      </div>
      <Carousel className='carrusel-container'>
        <Carousel.Item className='fitten'>
          <a href={allEvents[13]?.eventLink} target="_blank">
            <img
              id='carrusel-image'
              className="d-block w-100 image-carousel"
              style={{"objectFit": "cover"}}
              src={allEvents[13]?.image}
              alt={allEvents[13]?.title}
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={allEvents[25]?.eventLink} target="_blank">
            <img
              id='carrusel-image'
              className="d-block w-100 image-carousel"
              src={allEvents[25]?.image}
              alt={allEvents[25]?.title}
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={allEvents[24]?.eventLink} target="_blank">
            <img
              id='carrusel-image'
              className="d-block w-100 image-carousel"
              src={allEvents[24]?.image}
              alt={allEvents[24]?.title}
            />
          </a>
        </Carousel.Item>
      </Carousel>
      <div className='arrow-container-mobile'>
        <img className='arrow-mobile' src={Arrow} alt="asd" />
      </div>
    </div>

  );
}

export default Carrusel;