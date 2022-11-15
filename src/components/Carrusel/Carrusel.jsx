import Carousel from 'react-bootstrap/Carousel';
import HeroImage from '../../assets/UpcomingEvent.png';
import Arrow from "../../assets/Arrow 3.png"

function Carrusel() {
  return (
    <div className='full-container'>
      <div className='next-events'>
        <h2 className='subtitle'>Proximos Eventos</h2>
        <div className='arrow-container'>
          <img className='arrow' src={Arrow} alt="asd" />
        </div>
      </div>
      <Carousel className='carrusel-container'>
        <Carousel.Item className='fitten'>
          <img
            className="d-block w-100 image-carousel"
            src={HeroImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carousel"
            src={HeroImage}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 image-carousel"
            src={HeroImage}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='arrow-container-mobile'>
        <img className='arrow-mobile' src={Arrow} alt="asd" />
      </div>
    </div>

  );
}

export default Carrusel;