import React from 'react';
import HeroImage from '../../assets/hero.jpg';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='text-container'>
                <h1 className='text'>Ten a mano los <br /> eventos mas <br /> interesantes sobre el mundo IT en un <br />  solo lugar!</h1>
            </div>
            <div className='second-section-container'>
                <img className='image' src={HeroImage} alt="Hero Image" />
                <div className='second-text-container'><h3 className='image-text'>Holasdasdasdasdasd  sa d sa d</h3></div>
                <div className='button-container'><button className='cta-button'>Get a Ticket</button></div>
            </div>
        </div>
    )
};

export default Hero;