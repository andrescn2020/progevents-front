import React from 'react';

const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='text-container'>
                <div className="logo-container">
                    <h2 className="logo"><strong>prog</strong><span style={{ color: "#B9134F" }}>events</span></h2>
                </div>
                <h1 className='text'>Ten a mano los <br /> eventos mas <br /> interesantes sobre el <span style={{ color: "#B9134F" }}>mundo IT</span>  en un <br />  solo lugar!</h1>
                <div className='link-container'>
                    <a id='events-links' className='btn btn-secondary' href='#filters'>Ver Eventos</a>
                </div>
            </div>
            <div className='second-section-container'></div>
        </div>
    )
};

export default Hero;