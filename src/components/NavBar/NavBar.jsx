export const NavBar = () => {

  return (

    <nav className="navbar-container">
        <div className="logo-container">
            <h2 className="logo"><strong>prog</strong>events</h2>
        </div>
        <div className="list-container">
                <span className="list-item">Home</span>
                <span className="list-item">Events</span>
                <span className="list-item">Schedule</span>
        </div>
        <div className="subscribe-container">
            <button className="button">Subscribe</button>
        </div>
    </nav>

  )

};
