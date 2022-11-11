import React from 'react';
import HeroImage from '../../assets/hero.jpg';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='text-container'>
                <h1 className='text'>Ten a mano los eventos mas interesantes sobre el mundo IT en un solo lugar!</h1>
            </div>
            <div className='second-section-container'>
                <img className='image' src={HeroImage} alt="Hero Image" />
                <div className='second-text-container'>Lorem ipsun azteca mandangon sobietico</div>
                <div className='button-container'>Get a Ticket</div>
            </div>
        </div>
    )
};

export default Hero;