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
          <a href={allEvents[0]?.eventLink} target="_blank">
            <img
              id='carrusel-image'
              className="d-block w-100 image-carousel"
              src={allEvents[0]?.image}
              alt={allEvents[0]?.title}
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={allEvents[1]?.eventLink} target="_blank">
            <img
              id='carrusel-image'
              className="d-block w-100 image-carousel"
              src={allEvents[1]?.image}
              alt={allEvents[1]?.title}
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={allEvents[2]?.eventLink} target="_blank">
            <img
              id='carrusel-image'
              className="d-block w-100 image-carousel"
              src={allEvents[2]?.image}
              alt={allEvents[2]?.title}
            />
          </a>
        </Carousel.Item>
      </Carousel>
      <div className='arrow-container-mobile'>
        <img className='arrow-mobile' src={Arrow} alt="asd" />
      </div>
    </div>

  )

};

export default Carrusel;